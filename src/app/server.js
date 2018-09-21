const withTypeScript = require("@zeit/next-typescript");
const { createServer } = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  conf: withTypeScript({ distDir: "../../dist/functions/app" }),
});
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer(handler).listen(3000);
  })
  .catch(console.error);
