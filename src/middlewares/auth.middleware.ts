import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { errorThrower } from '../utils/errorThrower';

export type Logged = { id: number, username: string };

const authMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const { body } = req;
  const secret = 'SENHASUPERSECRETA';

  if (!authorization) errorThrower(401, 'Token not found');
  
  try {
    const decoded: unknown = jwt.verify(authorization as string, secret);
    req.body = { ...body, ...decoded as Logged };
    next();
  } catch (error) {
    errorThrower(401, 'Invalid token');
  }
};

export default authMiddleware;