import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    fileParallelism: false,
    sequence: {
      concurrent: false,
    },
    server: {
      deps: {
        inline: ["@fastify/autoload"],
      },
    },
  },
});
