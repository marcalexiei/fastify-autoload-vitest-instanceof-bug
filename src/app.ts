import path from "node:path";

import type fastify from "fastify";
import { SignatureError } from "./SignatureError.ts";
import autoload from "@fastify/autoload";
import route from "./routes/debug/index.ts";

const ENABLE_AUTOLOAD = process.env.AUTOLOAD === "false" ? false : true;

export const build = async (app: fastify.FastifyInstance): Promise<void> => {
  if (ENABLE_AUTOLOAD) {
    app.register(autoload, {
      dir: path.join(import.meta.dirname, "routes"),
      maxDepth: 1,
      encapsulate: true,
    });
  } else {
    app.register(route);
  }

  app.setNotFoundHandler((_, reply) => {
    reply.status(404).send({
      statusCode: 404,
      code: "NOT_FOUND",
      message: "Route not Found",
    });
  });

  app.setErrorHandler((err, req, reply) => {
    if (err instanceof SignatureError) {
      return reply.status(401).send({
        statusCode: 401,
        code: "SIGNATURE_ERROR",
        message: err.message,
      });
    }

    return reply.status(err.statusCode ?? 500).send({
      statusCode: 500,
      message: err.message,
    });
  });
};
