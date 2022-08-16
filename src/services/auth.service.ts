import { User, IUser } from "@src/models/mongo/user.model";
import CrudService from "./crud.service";
import jwt from "jsonwebtoken";
import configApp from "@src/environment/index";
import { passwordEncript, comparePassword } from "@src/utils/auth.util";

export interface IModelUSer {
  userName: string;
  email: string;
  password: string;
  age: number;
}

export class AuthService {
  service: CrudService<IUser>;
  constructor() {
    this.service = new CrudService(User);
  }
  public async signUp(user: IModelUSer): Promise<any> {
    try {
      user.password = await passwordEncript(user.password);
      const newUser: IUser = await this.service.create(user);
      const token = await jwt.sign(
        { email: newUser.email, userName: newUser.userName },
        configApp.secrectKey,
        {
          expiresIn: 3600,
        }
      );
      return { token };
    } catch (err) {
      return { message: "error when registering user" };
    }
  }
  public async signIn(user: IModelUSer): Promise<any> {
    try {
      const userDb = await this.service.findOne({email: user.email});
      if (!userDb) return { message: "unvalid user" };

      const comparePwd = await comparePassword(userDb.password, user.password);
      if (!comparePwd) return { message: "Invalid password" };

      const token = await jwt.sign(
        { email: user.email },
        configApp.secrectKey,
        {
          expiresIn: 3600,
        }
      );
      return { token };
    } catch (err) {
      return { message: "failed to login" };
    }
  }
}
