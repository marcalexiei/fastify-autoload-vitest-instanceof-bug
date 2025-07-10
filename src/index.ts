import fastify from "fastify";

import { build } from "./app.ts";

async function run(): Promise<void> {
  const app = fastify({
    logger: { level: "info" },
  });

  await build(app);

  await app.ready();

  const serverURL = await app.listen({ host: "localhost", port: 3000 });

  console.info("Server available on", serverURL);
}

run();
