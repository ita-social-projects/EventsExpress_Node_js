const logger = require("./logger");

describe("The logger", () => {
  it("should middlware use and it call next() with none", () => {
    const req = { method: "TEST", originalUrl: "/api/test" };

    const res = jest.fn();
    const next = jest.fn();
    logger(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
