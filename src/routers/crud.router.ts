import { Request, Response, Router } from "express";
import CrudService from "@src/services/crud.service";
import CrudController from "@src/controllers/crud.controller";
//import { Context, logRequest } from '@src/middleware';
import { Document } from "mongoose";

export const crudRouter = <
  M extends Document,
  S extends CrudService<M>,
  T extends CrudController<M, S>
>(
  router: Router,
  controller: T
): void => {
  router.get("/",
  //[Context.setup, logRequest],
   (req: Request, res: Response) => {
    controller.all(req, res);
  });
  router.get(
    '/filter',
    //[Context.setup, logRequest],
    (req: Request, res: Response) => {
      controller.filter(req, res);
    },
  );
  router.get(
    '/findOne',
    //[Context.setup, logRequest],
    (req: Request, res: Response) => {
      controller.findOne(req, res);
    },
  );
  router.get("/:id",
  //[Context.setup, logRequest],
   (req: Request, res: Response) => {
    controller.find(req, res);
  });
  router.post("/", 
  //[Context.setup, logRequest],
  (req: Request, res: Response) => {
    controller.create(req, res);
  });
  router.put("/:id", 
  //[Context.setup, logRequest],
  (req: Request, res: Response) => {
    controller.update(req, res);
  });
  router.delete("/:id", 
  //[Context.setup, logRequest],
   (req: Request, res: Response) => {
    controller.remove(req, res);
  });
  router.post("/upload", 
  //[Context.setup, logRequest],
  (req: Request, res: Response) => {
    controller.upload(req, res);
  });
};
