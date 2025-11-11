const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("🪽 Demondyctal Wings running"));
app.post("/exec", (req, res) => {
  const cmd = req.body.command || "none";
  res.json({ ok: true, executed: cmd });
});
app.listen(8081, () => console.log("🪽 Wings online at port 8081"));
