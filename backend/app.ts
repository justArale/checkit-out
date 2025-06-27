import dotenv from "dotenv";
dotenv.config();

import "./src/db/mongodb"; // MongoDB connection

import express from "express";

import configMiddleware from "./src/config";
import indexRoutes from "./src/routes/index.routes";
import errorHandling from "./src/utils/error-handling";

const app = express();

// Middleware Configuration
configMiddleware(app);

// Routes
app.use("/", indexRoutes);

// Error-Handling
errorHandling(app);

export default app;
