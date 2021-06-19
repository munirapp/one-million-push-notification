const express = require("express");
const routes = require("./routes");

const app = express();

// Ternary operation for load router
routes.forEach((route) => {
  const [path, module] = route;
  app.use(path, module);
});

module.exports = app;
