import { model, Schema, Model } from "mongoose";
import { Document } from "mongoose";


interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  userName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const User: Model<IUser> = model("User", UserSchema);

export { User, IUser };
