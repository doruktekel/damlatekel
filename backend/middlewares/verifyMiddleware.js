import jwt from "jsonwebtoken";
import UserModel from "../model/userModel.js";

const verifyMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(403);
    throw new Error("No token - no authorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      res.status(403);
      throw new Error("Token is not valid");
    }
    const user = await UserModel.findById(decoded._id);
    req.user = user;
    next();
  } catch (error) {
    res.status(403);
    throw new Error("Token is not valid or an error occurred");
  }
};

export default verifyMiddleware;
