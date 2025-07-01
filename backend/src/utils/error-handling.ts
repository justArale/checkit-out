import { Application, Request, Response, NextFunction } from "express";

// 404-Handler for missing routes
export default function errorHandling(app: Application) {
  // 1. Catch 404 and forward to error handler
  app.use((_req: Request, res: Response, _next: NextFunction) => {
    res.status(404).json({ message: "Resource not found" });
  });

  // 2. General error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
    });
  });
}
