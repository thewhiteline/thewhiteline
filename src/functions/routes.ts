import * as routes from "next-routes";

// @ts-ignore
export default routes()
  .add("index")
  .add("hello", "/hello/:name");
