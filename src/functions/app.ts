import * as functions from "firebase-functions";

export default functions.https.onRequest((req, res) => {
  res.status(200).send("Hello, world!");
});
