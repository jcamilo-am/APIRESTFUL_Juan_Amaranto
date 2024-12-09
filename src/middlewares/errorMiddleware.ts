// ./middlewares/errorMiddleware.ts
import { Request, Response, NextFunction } from 'express';

// Middleware global de manejo de errores
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({ message });
};
