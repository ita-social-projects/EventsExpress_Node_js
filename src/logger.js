/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

const pathLog = path.join(__dirname, "log.txt");

const logger = (req, _, next) => {
  try {
    const start = performance.now();
    next();

    const perf = performance.now() - start;
    const newFile = `\n${req.method} ${req.originalUrl} ${perf}`;
    fs.appendFileSync(pathLog, newFile);
  } catch (error) {
    console.log(error);
  }
};

module.exports = logger;
