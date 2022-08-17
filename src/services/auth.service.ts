import { User, IUser } from "@src/models/mongo/user.model";
import CrudService from "./crud.service";
import jwt from "jsonwebtoken";
import { passwordEncript, comparePassword } from "@src/utils/auth.util";
import env from '../environment';
const { encrypt } = env;

export interface BodyToken {
  email: string;
  username?: string;
}
export interface IModelUSer {
  userName: string;
  email: string;
  password: string;
}

const getDataByToken = async (token: string): Promise<BodyToken> => {
  return new Promise((success, reject) => {
    jwt.verify(token, encrypt.accessToken, (err, decoded: any) => {
      if (err) reject(err);
      const { email } = decoded;
      const user: BodyToken = { email };
      success(user);
    });
  });
};

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
        encrypt.accessToken,
      );
      const userDb = await this.service.findOne({email: newUser.email});
      return {...userDb, token };
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
        encrypt.accessToken,
      );
      return {...userDb, token };
    } catch (err) {
      return { message: "failed to login" };
    }
  }
  public async authVerify (header: any): Promise<BodyToken> {
    try {
      const [type, token] = header.split(' ');

      if (type !== 'Bearer') {
        throw new Error('Header type invalid');
      }
      if (!token) {
        throw new Error('Invalid token');
      }
      const {email}: BodyToken = await getDataByToken(token);
       const user= await User.findOne({ email });
       if (!user) throw new Error('Invalid token');
      return user;
    } catch (error) {
      throw new Error('Invalid token');
    }
  };
  
}
