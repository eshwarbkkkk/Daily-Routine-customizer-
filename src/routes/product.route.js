import express from "express";
import { sendToAi } from "../controller/product.controller.js";

const productRoute = express.Router();

productRoute.route("/ask").post(sendToAi)

export default productRoute;
