import express from "express";
import userRoute from "./user.route.js";
import productRoute from "./product.route.js";

const indexRouter = express.Router();

indexRouter.use("/api/user", userRoute);
indexRouter.use("/api/product", productRoute);

export default indexRouter;
