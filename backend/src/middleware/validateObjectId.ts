// Middleware to validate ObjectId
import { Request, Response, NextFunction, RequestHandler } from "express";
import mongoose from "mongoose";

export const validateObjectId: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Invalid item ID." });
    return;
  }
  next();
};
