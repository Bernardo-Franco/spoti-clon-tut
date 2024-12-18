import { Router } from 'express';
import { getAlbumById, getAllAlbums } from '../controller/album.controler.js';

const router = Router();

router.get('/', getAllAlbums);
router.get('/:albumId', getAlbumById);

export default router;
