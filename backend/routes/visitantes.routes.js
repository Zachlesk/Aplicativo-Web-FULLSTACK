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
router.get('/one/:id', getVisitante);
router.post('/add', postVisitante);
router.delete('/delete/:id', deleteVisitante);
router.put('/update/:id', putVisitante);

export default router;