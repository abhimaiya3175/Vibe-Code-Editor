import { useState } from "react";
import type { WebContainer } from "@webcontainer/api";

type AgentMessage = { role: "user" | "assistant" | "system"; content: string; type?: string };

export function useAgent(
  webcontainerInstance: WebContainer | null | undefined,
  writeFileSync: ((path: string, content: string) => Promise<void>) | undefined
) {
  const [isAgentRunning, setIsAgentRunning] = useState(false);

  const sendMessageToAgent = async (
    userMessage: string,
    history: AgentMessage[],
    mode: string,
    model: string,
    onIntermediateUpdate: (actionUpdate: string) => void
  ): Promise<string> => {
    setIsAgentRunning(true);
    let currentHistory = [...history];
    let nextMessage = userMessage;

    const maxIterations = 5;
    let iterations = 0;

    try {
      while (iterations < maxIterations) {
        iterations++;
        
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: nextMessage,
            history: currentHistory.map((m) => ({ role: m.role, content: m.content })),
            mode,
            model,
            stream: false
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to communicate with AI assistant.");
        }

        const data = await response.json();
        const aiResponse = data.response;
        let toolCall = null;

        try {
          if (aiResponse.includes("TOOL_CALL")) {
            const match = aiResponse.match(/{"TOOL_CALL":\s*{[\s\S]*}}/);
            if (match) {
              toolCall = JSON.parse(match[0]).TOOL_CALL;
            } else {
              // Try parsing the whole response if it's just JSON
              const parsed = JSON.parse(aiResponse);
              if (parsed.TOOL_CALL) toolCall = parsed.TOOL_CALL;
            }
          }
        } catch (e) {
          console.warn("Could not parse TOOL_CALL, ignoring...", e);
        }

        if (toolCall) {
          onIntermediateUpdate(`Executing action: ${toolCall.name}...`);
          let toolResult = "";
          try {
            if (toolCall.name === "read_file") {
              if (webcontainerInstance) {
                const content = await webcontainerInstance.fs.readFile(toolCall.parameters.path, "utf-8");
                toolResult = content;
              } else {
                toolResult = "WebContainer instance is not ready.";
              }
            } else if (toolCall.name === "write_file") {
              if (writeFileSync) {
                await writeFileSync(toolCall.parameters.path, toolCall.parameters.content);
                toolResult = `Successfully wrote to ${toolCall.parameters.path}`;
              } else {
                toolResult = "WebContainer instance is not ready.";
              }
            } else if (toolCall.name === "run_command") {
              if (webcontainerInstance) {
                const proc = await webcontainerInstance.spawn("sh", ["-c", toolCall.parameters.command]);
                let output = "";
                proc.output.pipeTo(
                  new WritableStream({
                    write(chunk) {
                      output += chunk;
                    },
                  })
                );
                await proc.exit;
                toolResult = output || "Command executed successfully with no output.";
              } else {
                toolResult = "WebContainer instance is not ready.";
              }
            } else {
              toolResult = `Unknown tool: ${toolCall.name}`;
            }
          } catch (e: any) {
            toolResult = `Error executing tool: ${e.message}`;
          }

          // Append assistant's response to history and prepare tool result
          currentHistory.push({ role: "assistant", content: aiResponse });
          nextMessage = `{"TOOL_RESULT": ${JSON.stringify(toolResult.substring(0, 2000))}}`;
          
          if (iterations < maxIterations) {
            onIntermediateUpdate(`Finished ${toolCall.name}. Waiting for AI reply...`);
          }
        } else {
          // AI provided a final answer without tools
          return aiResponse;
        }
      }
      return "Max iterations reached. The agent took too many steps.";
    } finally {
      setIsAgentRunning(false);
    }
  };

  return { sendMessageToAgent, isAgentRunning };
}
