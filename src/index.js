const server = require("./app");

const dotenv = require("dotenv");
dotenv.config();

const { NODE_PORT, NODE_ENV, NODE_APP } = process.env;

server.listen(NODE_PORT, (error) => {
  if (error) {
    console.error(error);
    process.exit();
  }

  console.log(`${NODE_APP} running on port ${NODE_PORT} with ${NODE_ENV} mode`);
});
