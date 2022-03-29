const express = require("express");
const logger = require("morgan");
const  cors = require("cors");
const { startApp } = require("./databaseSetup");
const ourLogger = require("./logger");

const testRouter = require("./components/test");
const categoryRouter = require("./routes/categories");
const eventsRouter = require('./routes/events');

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(ourLogger());

app.use("/api/test", testRouter);
<<<<<<< HEAD
app.use("/api/Category", categoryRouter);
=======
app.use('/api/events', eventsRouter);
>>>>>>> 0a5c6dd51017a1f143cd97eec90e3287f93ef8d1

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Internal Server Error" } = err;

  res.status(status).json(message);
});

startApp(app);
