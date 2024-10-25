import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { jwt_key } from "../constants.js";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, jwt_key);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401).send("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401).send("Not authorized, no token");
  }
};

export { protect };
