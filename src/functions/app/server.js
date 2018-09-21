const { createServer } = require("http");
const next = require("next");

const conf = require("./next.config");
const routes = require("../routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf });
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    createServer(handler).listen(3000);
  })
  .catch(console.error);
