const service = require("./notification.services");

const NotificationController = {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async pushAll(req, res) {
    return service
      .sendAllNotification()
      .then((response) => res.json(response))
      .catch((error) => res.status(500).json({ message: error.message }));
  },
  test(req, res) {
    return res.json({ message: "test" });
  },
};

module.exports = NotificationController;
