const controller = require("./notification.controller");

const NotificationRouter = require("express").Router();

NotificationRouter.post("/", controller.pushAll);
NotificationRouter.get("/", controller.test);

module.exports = NotificationRouter;
