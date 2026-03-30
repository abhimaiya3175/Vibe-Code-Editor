const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; padding: 2rem;">
      <h1>Playground Started</h1>
      <p>This is a placeholder playground because the original template files (vibecode-starters) are missing from your disk.</p>
    </div>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
