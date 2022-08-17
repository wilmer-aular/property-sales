import { Property, IProperty } from "@src/models";
import CrudService from "./crud.service";

export class PropertyService extends CrudService<IProperty> {
  constructor() {
    super(Property);
  }
  public async forUser(userId : any): Promise<any> {
    return await super.find({userId})
  } 

}
