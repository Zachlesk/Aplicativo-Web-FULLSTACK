import { Router } from 'express';
import {
    getVisitantes,
    getVisitante,
    postVisitante,
    deleteVisitante,
    putVisitante
} from '../controllers/visitantes.controller.js'

const router = Router();

router.get('/all', getVisitantes);
router.get('/one', getVisitante);
router.post('/add', postVisitante);
router.delete('/delete', deleteVisitante);
router.put('/update', putVisitante);

export default router;