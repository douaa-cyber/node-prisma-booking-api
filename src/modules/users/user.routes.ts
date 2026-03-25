import { Router } from "express";
import * as userController from "./user.controller";

const router = Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.login);

router.get("/:id", userController.getUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

router.get("/", userController.getAllUsers);

export default router;
