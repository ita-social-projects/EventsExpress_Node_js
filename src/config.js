require('dotenv').config();

const {
  DB_NAME = 'database_development',
  DB_USER = 'root',
  DB_PASSWORD = 'root',
  PORT = 3000,
  DB_HOST = 'mysqldb',
  DB_PORT = 3306,
} = process.env;

module.exports = { DB_NAME, DB_USER, DB_PASSWORD, PORT, DB_HOST, DB_PORT };
