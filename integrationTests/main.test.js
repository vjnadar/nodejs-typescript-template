const request = require("supertest");
let server;
describe("main route test", () => {
  beforeEach(() => {
    server = require("../src/server");
  });
  afterEach(() => {
    server.close();
  });
  describe("test", () => {
    it("should response coming from /main/test", async () => {
      let res = await request(server).get("/main/test");
      expect(res.status).toBe(200);
    });
  });
});
