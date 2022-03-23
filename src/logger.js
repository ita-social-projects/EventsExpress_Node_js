/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const date = new Date();

const fileName = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}-log`;

const pathLogDir = path.join(process.env.HOME, "EventsExpressNode-logs");
const pathLogFile = path.join(pathLogDir, fileName);

const isAccessible = (path) => {
  return fs.accessSync(path);
};

const logger = () => {
  try {
    isAccessible(pathLogDir);
  } catch (error) {
    fs.mkdirSync(pathLogDir);
  }

  try {
    isAccessible(pathLogFile);
  } catch (error) {
    fs.writeFileSync(pathLogFile, "");
  }

  return (req, _, next) => {
    try {
      const start = performance.now();
      next();

      const perf = performance.now() - start;
      const newLog = `\n${req.method} ${req.originalUrl} ${perf}`;
      fs.appendFileSync(pathLogFile, newLog);
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = logger;
