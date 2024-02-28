import express from "express";
const app = express();
const PORT = 8000;
import bodyParser from "body-parser";

import { translateController } from "./controller/controller.ts";

app.use(bodyParser.json());

app.post("/translateEnFr", async (req, res) => {
  await translateController(req, res);
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
