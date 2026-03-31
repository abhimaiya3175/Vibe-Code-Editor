import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  message: string;
  history: ChatMessage[];
}

async function generateAIResponse(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing from your .env file. Please add an API key from Google AI Studio.");
  }

  const systemPrompt = `You are an advanced AI coding assistant with access to the user's workspace via WebContainers.
You help developers with code explanations, debugging, architecture advice, writing clean code, and refactoring.

Important: You have the ability to execute actions in the workspace using tools!
If you need to read a file, write a file, or run a terminal command, you MUST output a TOOL_CALL in your response.
When you output a TOOL_CALL, the user's browser will execute it and return a TOOL_RESULT.

Available tools:
- read_file: read a file's content. Parameter: path (string).
- write_file: write content to a file. Parameters: path (string), content (string).
- run_command: run a terminal command. Parameter: command (string).

To use a tool, output exactly this JSON format on a new line:
{"TOOL_CALL": {"name": "tool_name", "parameters": {"param1": "value"}}}

Do not output multiple TOOL_CALLs in a single response. Always wait for the user to provide the result before proceeding.
Always provide clear, practical answers. Use proper code formatting when showing examples.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: (() => {
            const geminiContents: { role: string; parts: { text: string }[] }[] = [];
            for (const msg of messages) {
              const role = msg.role === "assistant" ? "model" : "user";
              // Combine consecutive messages with the same role
              if (geminiContents.length > 0 && geminiContents[geminiContents.length - 1].role === role) {
                geminiContents[geminiContents.length - 1].parts[0].text += "\n\n" + msg.content;
              } else {
                geminiContents.push({ role, parts: [{ text: msg.content }] });
              }
            }
            // Gemini strictly requires the first message to be from 'user'
            if (geminiContents.length > 0 && geminiContents[0].role === "model") {
               geminiContents.unshift({ role: "user", parts: [{ text: "Context restored." }] });
            }
            return geminiContents;
          })(),
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);
      throw new Error(data.error?.message || "Gemini API request failed");
    }

    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("No text response from Gemini model");
    }

    return data.candidates[0].content.parts[0].text.trim();
  } catch (error) {
    console.error("AI generation error:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to generate AI response");
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: ChatRequest = await req.json();
    const { message, history = [] } = body;

    // Validate input
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // Validate history format
    const validHistory = Array.isArray(history)
      ? history.filter(
          (msg) =>
            msg &&
            typeof msg === "object" &&
            typeof msg.role === "string" &&
            typeof msg.content === "string" &&
            ["user", "assistant"].includes(msg.role)
        )
      : [];

    const recentHistory = validHistory.slice(-10);

    const messages: ChatMessage[] = [
      ...recentHistory,
      { role: "user", content: message },
    ];

    //   Generate ai response

    const aiResponse = await generateAIResponse(messages);



    return NextResponse.json({
      response: aiResponse,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Failed to generate AI response",
        details: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
