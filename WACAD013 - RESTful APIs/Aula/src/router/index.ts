import { Router } from 'express';
import v1Router from './v1Router';

declare module 'express-session' {
  interface SessionData {
    uid: string;
    tipoUsuario: string;
  }
}

const router = Router();

router.use('/v1', v1Router);

export default router;
