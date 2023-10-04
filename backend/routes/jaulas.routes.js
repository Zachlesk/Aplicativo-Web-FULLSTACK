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
router.get('/one/:id', getJaula);
router.post('/add', postJaula);
router.delete('/delete/:id', deleteJaula);
router.put('/update/:id', putJaula);

export default router;