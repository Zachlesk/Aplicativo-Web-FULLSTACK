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
router.get('/one/:id', getMariposa);
router.post('/add', postMariposa);
router.delete('/delete/:id', deleteMariposa);
router.put('/update/:id', putMariposa);

export default router;