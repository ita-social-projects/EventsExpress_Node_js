const logger = require("./logger");

describe("test logger", () => {
  it("give req, res and next", () => {
    const req = { method: "TEST", originalUrl: "/api/test" };

    const res = jest.fn();
    const next = jest.fn();
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
