import fp from "fastify-plugin";
import { SignatureError } from "../../SignatureError.ts";

export default fp((fastify) => {
  fastify.route({
    method: "GET",
    url: "/debug",
    handler() {
      throw new SignatureError("test");
    },
  });
});
