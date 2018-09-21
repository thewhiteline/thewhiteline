const { createServer } = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const conf = require("./next.config");
const app = next({ dev, conf });
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer(handler).listen(3000);
  })
  .catch(console.error);
