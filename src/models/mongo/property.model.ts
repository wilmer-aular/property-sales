import { model, Schema, Model } from "mongoose";
import { Document } from "mongoose";

export enum Type {
  House = "House",
  Apartments = "Apartments",
  Office = "Office",
}
interface IProperty extends Document {
  type : Type;
  address : string;
  city : string;
  country : string;
  price : number;
  numberOfRooms: number;
  numberOfBathrooms : number;
  ImgUrl : string;
  date: Date;
}

const PropertySchema: Schema = new Schema({
  type : { type: String, require: true },
  address : { type: String, require: true },
  city : { type: String, require: true },
  country : { type: String, require: true },
  price : { type: Number, require: true },
  numberOfRooms: { type: Number, require: true },
  numberOfBathrooms : { type: Number, require: true },
  ImgUrl : { type: String, require: true },
  date: { type: Date, require: true, default: new Date() },
});

const Property: Model<IProperty> = model("Property", PropertySchema);

export { Property, IProperty};
