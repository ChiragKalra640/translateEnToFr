import express from "express";
const app = express();
const port = Number(process.env.PORT) || 8000; 
import bodyParser from "body-parser";

import { translateController } from "./controller/controller.ts";

app.use(bodyParser.json());

app.post("/translateEnFr", async (req, res) => {
  await translateController(req, res);
});

app.listen(port,"0.0.0.0", () => {
  console.log(`server is running at port ${port}`);
});
