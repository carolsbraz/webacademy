import { Router } from "express";

import authRouter from "../resources/auth/auth.router";
import produtoRouter from "../resources/produto/produto.router";
import compraRouter from "../resources/compra/compra.router";
import usuarioRouter from "../resources/usuario/usuario.router";
import tipoUsuarioRouter from "../resources/tipoUsuario/tipoUsuario.router";
import linguagemRouter from "../resources/linguagem/linguagem.router";

const router = Router();

router.use(
  "/auth",
  // #swagger.tags = ['Auth']
  authRouter
);

router.use(
  "/produto",
  // #swagger.tags = ['Produto']
  produtoRouter
);

router.use(
  "/compra",
  // #swagger.tags = ['Compra']
  compraRouter
);

router.use(
  "/usuario",
  // #swagger.tags = ['Usuario']
  usuarioRouter
);

router.use(
  "/linguagem",
  // #swagger.tags = ['Linguagem']
  linguagemRouter
);

export default router;
