import { Router, Request, Response } from 'express';
import { crudRouter } from "../crud.router";
import { PropertyController } from "@src/controllers/property.controller";
import { IProperty } from "@src/models";
import { PropertyService } from "@src/services/property.service";
import { Context, logRequest, authValidation } from '@src/middleware';

const router = Router();

const supplyRouter = (router: Router) => {
  const controller = new PropertyController();

  router.get('/viewStock', 
  //[authValidation, Context.setup, logRequest],
  (req: Request, res: Response) => {
    controller.viewStock(req, res);
  });

  crudRouter<IProperty, PropertyService, PropertyController>(
    router,
    controller
  );
};

supplyRouter(router);




export default router;
