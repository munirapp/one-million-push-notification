const events = require("./notification.events");
// Register all envents on notification events
events.register();
const db = require("../../../db/models");
// const { Op } = require("sequelize");

const NotificationServices = {
  async sendAllNotification() {
    // Count total row user
    const totalUsers = await db.User.count().catch((error) => {
      throw error;
    });

    // let counter = 0;
    // const divider = 10000;

    // for (let i = totalUsers; i >= 0; i -= divider) {
    //   const gte = counter ? counter * divider + 1 : 1;
    //   const lte = gte + divider - 1;

    //   if (gte >= totalUsers) break;

    //   const data = await db.User.findAll({
    //     where: { id: { [Op.gte]: gte, [Op.lte]: lte } },
    //   }).catch((error) => {
    //     throw error;
    //   });

    //   counter++;

    //   console.log(`from ${gte} to ${lte}`);
    // }

    events.emit("notification:send:all", { total: totalUsers });

    return {
      message: `running push notification for ${totalUsers}, process will automatically run in background`,
    };
  },
};

module.exports = NotificationServices;
