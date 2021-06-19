const EventEmitter = require("events");
const events = new EventEmitter();
const path = require("path");
const dir = "../../queue/Notification/";

const NotificationEvents = {
  emit(name, payload) {
    events.emit(name, payload);
  },

  register() {
    // All register events
    events.on("notification:send:all", this.notificationSendAll);
  },

  notificationSendAll(payload) {
    try {
      const key = "notification:send:all";
      console.log(
        `success transfer to event emitter | event name: ${key} | event payload: ${payload}`
      );
      // Require queue module
      const queue = require(path.join(dir + key));
      queue.create(key);
      queue.load();
      queue.run(payload.total);
    } catch (error) {
      console.error(error);
      throw new Error("error when queue notification:send:all");
    }
  },
};

module.exports = NotificationEvents;
