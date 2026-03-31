const data = JSON.stringify({
  message: "Run a read_file on package.json",
  history: [
    { role: "assistant", content: "I am an assistant" },
    { role: "assistant", content: "I can't read" }
  ]
});

fetch("http://localhost:3000/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: data
}).then(async (res) => {
  console.log("Status:", res.status);
  const text = await res.text();
  console.log("Response:", text);
}).catch(console.error);
