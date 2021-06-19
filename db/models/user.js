"use strict";
const { Model } = require("sequelize");

const dotenv = require("dotenv");
dotenv.config();
const { DB_SCHEMA } = process.env;

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      fullName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      platform: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      schema: DB_SCHEMA,
    }
  );
  return User;
};
