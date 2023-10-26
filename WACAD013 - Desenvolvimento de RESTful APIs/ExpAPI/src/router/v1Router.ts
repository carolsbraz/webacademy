import { Router } from 'express';
import produtoRouter from '../resources/produto/produto.router';

const router = Router();

router.use('/produto', produtoRouter);

export default router;
