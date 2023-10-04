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
router.get('/one/:id', getAlimentacion);
router.post('/add', postAlimentacion);
router.delete('/delete/:id', deleteAlimentacion);
router.put('/update/:id', putAlimentacion);

export default router;