import { Router } from "express";

import linguagemController from "./linguagem.controller";
import linguagemSchema from "./linguagem.schemas";
import validate from "../../middlewares/validate";

const router = Router();

router.post("/", validate(linguagemSchema), linguagemController.change);
router.get("/", linguagemController.getLinguagem);

export default router;
