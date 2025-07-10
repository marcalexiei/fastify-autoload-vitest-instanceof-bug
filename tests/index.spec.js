import { beforeAll, expect, describe, it } from "vitest";
import fastify from "fastify";

import { build } from "../src/app.js";

describe("admin", () => {
  let app;
  beforeAll(async () => {
    app = fastify();
    await build(app);

    return () => {
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
