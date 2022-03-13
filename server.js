const app = require("./app");
const db = require("./configDB");
require("dotenv").config();

const { PORT = 3000 } = process.env;

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
