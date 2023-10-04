import { Router } from 'express';
import {
    getJaulas,
    getJaula,
    postJaula,
    deleteJaula,
    putJaula
} from '../controllers/jaulas.controller.js'

const router = Router();

router.get('/all', getJaulas);
router.get('/one', getJaula);
router.post('/add', postJaula);
router.delete('/delete', deleteJaula);
router.put('/update', putJaula);

export default router;