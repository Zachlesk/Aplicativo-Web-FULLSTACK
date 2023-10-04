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
router.get('/one', getObservacion);
router.post('/add', postObservacion);
router.delete('/delete', deleteObservacion);
router.put('/update', putObservacion);

export default router;