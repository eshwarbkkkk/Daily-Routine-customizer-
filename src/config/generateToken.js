import jwt from "jsonwebtoken";
import { jwt_key } from "../constants.js";

const generateToken = (id) => {
  return jwt.sign({ id }, jwt_key, {
    expiresIn: "30d",
  });
};

export default generateToken;
