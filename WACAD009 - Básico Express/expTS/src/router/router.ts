import express from 'express';
import mainController from '../controllers/main';

const router = express.Router();

// Main controller
router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);
router.get('/lorem/:paragrafos', mainController.lorem);

export default router;
