import { Request, Response } from "express";
import { AuthService } from "@src/services/auth.service";
import {resolver} from '../libs/resolver'

class AuthController {
  service: AuthService;

  constructor() {
    this.service = new AuthService();
  }
  login(req: Request, res: Response): void {
    resolver(this.service.signIn(req.body), res, "login");
  }

  signUp(req: Request, res: Response): void {
    resolver(this.service.signUp(req.body), res, "signUp");
  }
}

export { AuthController };
