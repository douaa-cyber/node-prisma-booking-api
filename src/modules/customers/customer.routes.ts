import { Router } from "express";
import * as controller from "./customer.controller";

const router = Router();

router.post("/", controller.createCustomer);
router.get("/", controller.getCustomers);
router.get("/:id", controller.getCustomer);
router.patch("/:id", controller.updateCustomer);
router.delete("/:id", controller.deleteCustomer);

export default router;
