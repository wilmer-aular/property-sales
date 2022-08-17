import { Request, Response } from 'express';
import { IProperty } from "@src/models/mongo/property.model";
import CrudController from "./crud.controller";
import { PropertyService } from "@src/services/property.service";
import {resolver} from '../libs/resolver'
class PropertyController extends CrudController<IProperty, PropertyService> {
  constructor() {
    super(new PropertyService(), "property");
    
  }
  async forUser(req: Request, res: Response): Promise<any> {
    const {userId} = req.params;
    resolver(this.service.forUser(userId), res);
  }
}

export { PropertyController };
