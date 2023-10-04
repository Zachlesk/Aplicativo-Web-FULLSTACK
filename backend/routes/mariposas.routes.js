import { Router } from "express";
import {
    getMariposas,
    getMariposa,
    postMariposa,
    deleteMariposa,
    putMariposa
} from '../controllers/mariposas.controller.js'

const router = Router();

router.get('/all', getMariposas);
router.get('/one', getMariposa);
router.post('/add', postMariposa);
router.delete('/delete', deleteMariposa);
router.put('/update', putMariposa);

export default router;