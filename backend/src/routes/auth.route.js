import { Router } from 'express';
import { getAuth, authCallback } from '../controller/auth.controller.js';

const router = Router();

router.get('/', getAuth);
router.post('/callback', authCallback);

export default router;
