import { Request, Response } from "express";
import { Document } from "mongoose";
import {resolver} from '../libs/resolver'
import CrudService from "@src/services/crud.service";

class CrudController<M extends Document, S extends CrudService<M>> {
  constructor(readonly service: S, readonly serviceName: string) {}

  all(req: Request, res: Response): void {
    resolver(this.service.all(), res, this.serviceName);
  }

  filter(req: Request, res: Response): void {
    resolver(this.service.find(req.query), res, this.serviceName);
  }

  findOne(req: Request, res: Response): void {
    resolver(this.service.findOne(req.query), res, this.serviceName);
  }

  find(req: Request, res: Response): void {
    const { id } = req.params;
    resolver(this.service.byId(id), res, this.serviceName);
  }

  create(req: Request, res: Response): void {
    resolver(this.service.create(req.body), res, this.serviceName);
  }

  remove(req: Request, res: Response): void {
    resolver(this.service.remove(req.params.id), res, this.serviceName);
  }

  update(req: Request, res: Response): void {
    resolver(
      this.service.update(req.params.id, req.body),
      res,
      this.serviceName
    );
  }
  upload(req: any, res: Response): void {
    const { file } = req.files;
    resolver(
      this.service.upload(this.serviceName, file),
      res,
      this.serviceName
    );
  }
}

export default CrudController;
