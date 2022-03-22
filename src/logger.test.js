const logger = require("./logger");

describe("The logger", () => {
  it("should middlware use next", () => {
    const req = { method: "TEST", originalUrl: "/api/test" };

    const res = jest.fn();
    const next = jest.fn();
    logger(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
