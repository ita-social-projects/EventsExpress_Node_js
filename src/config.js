require("dotenv").config();

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  PORT = 3000,
  DB_HOST,
  DB_PORT,
} = process.env;

module.exports = { DB_NAME, DB_USER, DB_PASSWORD, PORT, DB_HOST, DB_PORT };
