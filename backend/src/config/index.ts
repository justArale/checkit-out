import express, { Application } from "express";
import logger from "morgan";
import cors from "cors";

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173";

export default (app: Application) => {
  app.set("trust proxy", 1);

  app.use(
    cors({
      credentials: true,
      origin: [FRONTEND_URL],
    })
  );

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
