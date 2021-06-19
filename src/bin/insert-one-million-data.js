"use strict";

const faker = require("faker");
const platforms = ["web", "mobile"];
const db = require("../../db/models");

const recursiveSeeder = async (counter) => {
  if (counter) {
    const fullName = faker.name.findName();
    const email = faker.internet.email();
    const platformType = counter % 2 == 0 ? 0 : 1;

    await db.User.create({
      fullName,
      username: fullName.split(" ")[0].toLowerCase(),
      email,
      platforms: platforms[platformType],
    });

    counter--;
    recursiveSeeder(counter);
  }
  return;
};

(async () => {
  const divider = 0;
  setTimeout(recursiveSeeder(1000000 - divider), 500);
})();
