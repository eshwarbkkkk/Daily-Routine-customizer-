import express from "express";
import {
  registerUser,
  loginUser,
  allUsers,
} from "../controller/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/all", protect, allUsers);

export default router;
