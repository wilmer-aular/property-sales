import { Property, IProperty } from "@src/models";
import CrudService from "./crud.service";

export class PropertyService extends CrudService<IProperty> {
  constructor() {
    super(Property);
  }
}
