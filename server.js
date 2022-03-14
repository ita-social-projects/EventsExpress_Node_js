const app = require("./src");
const db = require("./src/databaseSetup");
const { PORT } = require("./src/config");

db.authenticate()
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error with connect to database", err);
    process.exit(1);
  });
