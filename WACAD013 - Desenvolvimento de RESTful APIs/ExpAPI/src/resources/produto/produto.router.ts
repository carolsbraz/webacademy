import { Router } from "express";

import produtoController from "./produto.controller";
import { produtoSchema } from "./produto.schema";
import validate from "../../middlewares/validate";

const router = Router();

router.get("/", produtoController.index);
router.post("/", validate(produtoSchema), produtoController.create);
router.get("/:id", produtoController.read);
router.put("/:id", validate(produtoSchema), produtoController.update);
router.delete("/:id", produtoController.remove);

export default router;
