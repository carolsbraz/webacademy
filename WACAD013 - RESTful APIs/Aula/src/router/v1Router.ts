import { Router } from 'express';

import produtoRouter from '../resources/produto/produto.router';
import linguagemRouter from '../resources/linguagem/linguagem.router';
import authRouter from '../resources/auth/auth.router';

const router = Router();

router.use('/produto', produtoRouter);
router.use('/linguagem', linguagemRouter);
router.use('/', authRouter);

export default router;
