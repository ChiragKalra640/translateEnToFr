import translate from "translate";

export const translateClient = async (text: string, translator: string) => {
  try {
    const result = await translate(text, translator);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
