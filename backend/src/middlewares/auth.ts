import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: string | object;
    }
  }
}

const auth = (req: Request, res: Response, next: NextFunction): void => {
  // console.log("Нэвтэрсэн хэрэглэгч шалгах", req.headers.authorization);

  if (!req.headers.authorization) {
    res.status(401).json({ message: "Энэ үйдлийг хийхийн тулд нэвтэрнэ үү." });
    return;
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const user = jwt.verify(token, "JWT_TOKEN_PASS@123");
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export { auth };
