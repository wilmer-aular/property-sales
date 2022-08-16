import { Router, Request, Response } from "express";
import * as modules from "./modules";

const router = Router();

router.use("/property", modules.property);
router.use("/auth", modules.auth);

router.get("/", (req: Request, res: Response) => {
  res.send("You have reached the API!");
});

export default router;
