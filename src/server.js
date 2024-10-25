import { PORT, DB_URL } from "./constants.js";
import app from "./app.js";
import http from "http";
import connectDB from "./db/db.connect.js";

const server = http.createServer(app);

connectDB(DB_URL)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is up and running on PORT :${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
