import { Router } from "express";
import * as controller from "./service.controller";

const router = Router();

router.post("/", controller.createService);
router.get("/", controller.getService);
router.get("/:id", controller.getService);
router.patch("/:id", controller.updateService);
router.delete("/:id", controller.deleteService);

export default router;
