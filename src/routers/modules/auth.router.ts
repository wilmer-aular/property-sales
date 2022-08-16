import { Request, Response, Router } from "express";
import { AuthController } from "@src/controllers/auth.controller";

const router = Router();

router.post(
  "/login",
  // [Context.setup, logRequest],
  (req: Request, res: Response) => {
    const loginController = new AuthController();
    loginController.login(req, res);
  }
);
router.post(
  "/signUp",
  // [Context.setup, logRequest],
  (req: Request, res: Response) => {
    const loginController = new AuthController();
    loginController.signUp(req, res);
  }
);

export default router;
