"use strict";
const dotenv = require("dotenv");
dotenv.config();
const { DB_SCHEMA } = process.env;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        fullName: {
          type: Sequelize.STRING,
        },
        username: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        platform: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      { schema: DB_SCHEMA }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
