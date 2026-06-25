import express from "express";

const app = express();

const port = process.env.PORT || 3000;
const baseUri = process.env.BASE_URI || "/";

app.get(baseUri, (req, res) => {
  res.send("Hello from Express");
});

app.get(`${baseUri}/health`, (req, res) => {
  res.json({ ok: true, baseUri });
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening on ${port}`);
  console.log(`Base URI: ${baseUri}`);
});