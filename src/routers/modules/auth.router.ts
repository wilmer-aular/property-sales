import { Request, Response, Router } from "express";
import { AuthController } from "@src/controllers/auth.controller";
import { Context, logRequest } from '@src/middleware';

const router = Router();

router.post(
  "/signin",
   [Context.setup, logRequest],
  (req: Request, res: Response) => {
    const loginController = new AuthController();
    loginController.login(req, res);
  }
);
router.post(
  "/signup",
   [Context.setup, logRequest],
  (req: Request, res: Response) => {
    const loginController = new AuthController();
    loginController.signUp(req, res);
  }
);

export default router;
