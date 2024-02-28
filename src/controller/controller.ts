import { checkRequestBody } from "../models/types.ts";
import { translateService } from "../service/service.ts";

export const translateController = async (req: any, res: any) => {
  try {
    if (!req.body) throw new Error("No body found in request");
    checkRequestBody(req, res);
    const { text } = req.body;
    const translator = "fr";
    const result = await translateService(text, translator);
    res.send(result);
  } catch (err: any) {
    res.send(err.message);
    res.status(422);
    throw new Error(err.message);
  }
};
