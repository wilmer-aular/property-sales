import { Request, Response, NextFunction } from 'express';
//import { authVerify } from '@src/services/auth.service';

const authValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const authHeader = req.headers['authorization'];
  try {
    // const user = await authVerify(authHeader);
    // req['user'] = user;
    next();
  } catch (error) {
    res.status(401);
    res.json({ error: true, status: 401, message: 'error.message' });
  }
};

export { authValidation };
