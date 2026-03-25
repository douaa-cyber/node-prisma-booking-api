import { Router } from "express";
import * as controller from "./appointment.controller";

const router = Router();

router.post("/", controller.createAppointment);
router.get("/", controller.getAppointments);
router.get("/:id", controller.getAppointment);
router.patch("/:id", controller.updateAppointment);

export default router;
