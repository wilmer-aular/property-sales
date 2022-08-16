import { IProperty } from "@src/models/mongo/property.model";
import CrudController from "./crud.controller";
import { PropertyService } from "@src/services/property.service";

class PropertyController extends CrudController<IProperty, PropertyService> {
  constructor() {
    super(new PropertyService(), "property");
  }
}

export { PropertyController };
