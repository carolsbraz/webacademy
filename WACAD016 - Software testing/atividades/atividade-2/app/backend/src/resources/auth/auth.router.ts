import { Router } from "express";

import authController from "./auth.controller";

const router = Router();

router.post("/", authController.signup);
router.put("/", authController.login);
router.delete("/", authController.logout);

export default router;
