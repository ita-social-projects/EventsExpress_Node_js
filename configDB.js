const Sequelize = require("sequelize");

const db = new Sequelize("mern_db", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  },
});

module.exports = db;
