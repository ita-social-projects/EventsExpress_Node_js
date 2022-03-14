const Sequelize = require("sequelize");
const { DB_NAME, DB_USER, DB_PASSWORD } = require("./config");

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "127.0.0.1",
  dialect: "mysql",
  /* FOR MACOS */
  dialectOptions: {
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  },
});

module.exports = db;
