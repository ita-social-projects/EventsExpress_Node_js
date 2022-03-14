require("dotenv").config();

const { DB_NAME, DB_USER, DB_PASSWORD, PORT = 3000 } = process.env;

module.exports = { DB_NAME, DB_USER, DB_PASSWORD, PORT };
