import { Router } from "express";

import linguagemController from "./linguagem.controller";
import linguagemSchema from "./linguagem.schemas";
import validate from "../../middlewares/validate";

const router = Router()

router.post("/change", validate(linguagemSchema), linguagemController.change)

export default router;