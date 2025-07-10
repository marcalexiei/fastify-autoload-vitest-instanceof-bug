import createError from "@fastify/error";

export const SignatureError = createError<[string]>(
  "SIGNATURE_ERROR",
  "Bad signature"
);
