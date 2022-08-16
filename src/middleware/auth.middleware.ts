import { Request, Response, NextFunction } from 'express';
import { AuthService } from "@src/services/auth.service";

const authValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const authHeader = req.headers['authorization'];
  try {
    const service = new AuthService();
    const user = await service.authVerify(authHeader);
    console.info({user});
    //req['user'] = user;
    next();
  } catch (error) {
    res.status(401);
    res.json({ error: true, status: 401, message: 'Not authorized' });
  }
};

export { authValidation };
