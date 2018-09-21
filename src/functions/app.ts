import * as functions from "firebase-functions";
import * as next from "next";

import routes from "./routes";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf: { distDir: "app" } });
const handler = routes.getRequestHandler(app);

export default functions.https.onRequest((req, res) => {
  return (
    app
      .prepare()
      .then(() => handler(req, res))
      // tslint:disable-next-line
      .catch(console.error)
  );
});
