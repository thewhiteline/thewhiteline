import * as functions from "firebase-functions";
import * as next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf: { distDir: "app" } });
const handler = app.getRequestHandler();

export default functions.https.onRequest((req, res) => {
  return (
    app
      .prepare()
      .then(() => handler(req, res))
      // tslint:disable-next-line
      .catch(console.error)
  );
});
