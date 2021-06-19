"use strict";

const dotenv = require("dotenv");
dotenv.config();
const faker = require("faker");
const { DB_SCHEMA } = process.env;

const platforms = ["web", "mobile"];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const recursiveSeeder = async (counter) => {
      if (counter) {
        const fullName = faker.name.findName();
        const email = faker.internet.email();

        await queryInterface.bulkInsert(
          "User",
          [
            {
              fullName,
              username: fullName.split(" ")[0].toLowerCase(),
              email,
              platforms: faker.datatype.number({ min: 0, max: 1 }),
            },
          ],
          {
            schema: DB_SCHEMA,
          }
        );

        counter--;
        recursiveSeeder(counter);
      }
      return;
    };

    setTimeout(recursiveSeeder(1000000), 500);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("User", null, { schema: DB_SCHEMA });
  },
};
