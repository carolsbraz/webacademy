import { Router } from "express";

import usuarioController from "./usuario.controller";
import isAdmin from "../../middlewares/isAdmin";
import { usuarioSchema } from "./usuario.schemas";
import validate from "../../middlewares/validate";

const router = Router();

router.get("/", isAdmin, usuarioController.index);
router.post("/", validate(usuarioSchema), usuarioController.create);
router.get("/:id", isAdmin, usuarioController.read);
router.put("/:id", validate(usuarioSchema), isAdmin, usuarioController.update);
router.delete("/:id", isAdmin, usuarioController.remove);

export default router;
