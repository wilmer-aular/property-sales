import { model, Schema, Model } from "mongoose";
import { Document } from "mongoose";


interface IProperty extends Document {
  address : string;
  city : string;
  country : string;
  price : number;
  numberOfRooms: number;
  numberOfBathrooms : number;
  ImgUrl : string;
}

const PropertySchema: Schema = new Schema({
  address : { type: String, require: true },
  city : { type: String, require: true },
  country : { type: String, require: true },
  price : { type: Number, require: true },
  numberOfRooms: { type: Number, require: true },
  numberOfBathrooms : { type: Number, require: true },
  ImgUrl : { type: String, require: true },
});

const Property: Model<IProperty> = model("Property", PropertySchema);

export { Property, IProperty};
