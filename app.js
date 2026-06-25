import express from "express";

const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;
const baseUri = process.env.PASSENGER_BASE_URI || "/";

router.get("/", (req, res) => {
  res.send("Hello from Express");
});


app.use(baseUri, router);

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening on ${port}`);
  console.log(`Base URI: ${baseUri}`);
});