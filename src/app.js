import express from "express";
import indexRouter from "./routes/index.route.js";
import cookie from "cookie-parser";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookie());

app.use("/", indexRouter);

export default app;
