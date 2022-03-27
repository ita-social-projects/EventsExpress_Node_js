const Sequelize = require("sequelize");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, PORT } = require("./config");

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  // dialectOptions: {
  //   socketPath: "",
  // },

});

const startApp = async (app) => {
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
};

module.exports = { db, startApp };
