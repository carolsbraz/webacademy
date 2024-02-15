import { Router } from 'express';
import usuarioController from './usuario.controller';
import { usuarioSchema } from './usuario.schemas';
import validate from '../../middlewares/validate';
import isAdmin from '../../middlewares/isAdmin';

const router = Router();

router.get('/', usuarioController.index);
router.post('/', isAdmin, validate(usuarioSchema), usuarioController.create);
router.get('/:id', usuarioController.read);
router.put('/:id', isAdmin, validate(usuarioSchema), usuarioController.update);
router.delete('/:id', isAdmin, usuarioController.remove);

export default router;
