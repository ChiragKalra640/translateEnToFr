import { translateClient } from "../client/client.ts";

export const translateService = async (text: string, translator: string) => {
  try {
    const result = await translateClient(text, translator);
    const translateResult = { translation: result };
    return JSON.stringify(translateResult);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
