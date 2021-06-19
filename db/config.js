const dotenv = require("dotenv");
dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_SCHEMA } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: "db",
    dialect: "postgres",
    migrationStorageTableSchema: DB_SCHEMA,
  },
  // test: {
  //   username: "root",
  //   password: null,
  //   database: "database_test",
  //   host: "127.0.0.1",
  //   dialect: "mysql",
  // },
  // production: {
  //   username: "root",
  //   password: null,
  //   database: "database_production",
  //   host: "127.0.0.1",
  //   dialect: "mysql",
  // },
};
