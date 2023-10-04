import { Router } from 'express';
import {
    getAlimentaciones,
    getAlimentacion,
    postAlimentacion,
    deleteAlimentacion,
    putAlimentacion
} from '../controllers/alimentacion.controller.js'

const router = Router();

router.get('/all', getAlimentaciones);
router.get('/one', getAlimentacion);
router.post('/add', postAlimentacion);
router.delete('/delete', deleteAlimentacion);
router.put('/update', putAlimentacion);

export default router;