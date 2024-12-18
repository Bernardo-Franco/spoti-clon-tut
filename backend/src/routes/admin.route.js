import { Router } from 'express';
import {
  createSong,
  deleteSong,
  createAlbum,
  deleteAlbum,
  checkAdmin,
} from '../controller/admin.controller.js';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();
//this will require the 2 protect route functions in any call ahead
router.use(protectRoute, requireAdmin);

router.get('/checkAdmin', checkAdmin);

router.post('/songs', createSong);
router.delete('/songs/:id', deleteSong);

router.post('/album', createAlbum);
router.delete('/album/:id', deleteAlbum);

export default router;
