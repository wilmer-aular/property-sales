import { Router } from "express";
import { crudRouter } from "../crud.router";
import { PropertyController } from "@src/controllers/property.controller";
import { IProperty } from "@src/models";
import { PropertyService } from "@src/services/property.service";

const router = Router();

crudRouter<IProperty, PropertyService, PropertyController>(
  router,
  new PropertyController()
);

export default router;
