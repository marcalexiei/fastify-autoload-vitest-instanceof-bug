import { before, describe, it } from "node:test";
import assert from "node:assert";
import type { FastifyInstance } from "fastify";
import fastify from "fastify";

import { build } from "../src/app.ts";

describe("debugging instanceof", () => {
  let app: FastifyInstance;
  before(async () => {
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

    assert.equal(response.statusCode, 401);
  });
});
