import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../utils/errorThrower';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { statusCode, message } = err as HttpException;
  if (statusCode) return res.status(statusCode).json({ message });
  return res.status(500).json({ message: 'Erro interno' });
};

export default errorMiddleware;