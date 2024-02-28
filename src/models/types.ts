import { z } from "zod";

const ReqBodySchema = z.object({
  text: z
    .string({
      required_error: "Text is required",
      invalid_type_error: "Text must be a string",
    })
    .min(1),
});

export const checkRequestBody = (req: any, res: any) => {
  try {
    ReqBodySchema.parse(req.body);
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(400);
      throw new Error(err.issues[0].message);
    }
  }
};

export type RequestBodyType = z.infer<typeof ReqBodySchema>;
