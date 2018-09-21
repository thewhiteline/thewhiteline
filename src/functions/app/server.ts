import { createServer } from "http";
import * as next from "next";

import routes from "../routes";
import conf from "./next.config";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf });
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    createServer(handler).listen(3000);
  })
  // tslint:disable-next-line
  .catch(console.error);
