import { beforeAll, describe, expect, it } from "vitest";
import type { FastifyInstance } from "fastify";
import fastify from "fastify";

import { build } from "../src/app.ts";

describe("admin", () => {
  let app: FastifyInstance;
  beforeAll(async () => {
    app = fastify();
    await build(app);

    return (): void => {
      app.close();
    };
  });

  it("should return 401, but when autoload is set returns 500", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/debug",
    });

    expect(response.statusCode).toBe(401);
  });
});
