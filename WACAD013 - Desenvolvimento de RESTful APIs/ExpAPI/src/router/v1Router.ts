import { Router } from "express";

import produtoRouter from "../resources/produto/produto.router";
import linguagemRouter from "../resources/linguagem/linguagem.router"

const router = Router();

router.use("/produto", produtoRouter);
router.use("/linguagem", linguagemRouter);

export default router;
