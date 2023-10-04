import { Router } from 'express';
import {
    getObservaciones,
    getObservacion,
    postObservacion,
    deleteObservacion,
    putObservacion
} from '../controllers/observaciones.controller.js'

const router = Router();

router.get('/all', getObservaciones);
router.get('/one/:id', getObservacion);
router.post('/add', postObservacion);
router.delete('/delete/:id', deleteObservacion);
router.put('/update/:id', putObservacion);

export default router;