import db from "../connection/connection.js";
import { ObjectId } from 'mongodb';

const visitantes = db.collection('visitantes');

export const getVisitantes = async(req,res)=>{
    try {
       const visitante = await visitantes.find().toArray();
        res.json(visitante) 
    } catch (error) {
        console.error(error)
    }
}

export const getVisitante = async(req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const visitante = await visitantes.findOne({_id: objectID})
        res.json(visitante)
    } catch (error) {
        console.error(error)
    }
}

export const postVisitante = async(req, res)=>{
    try {
        const { nombre, correo, fecha_visita, edad, ciudad, telefono } = req.body
        const data = {
            nombre, 
            correo, 
            fecha_visita, 
            edad, 
            ciudad, 
            telefono
        }
        const visitante = await visitantes.insertOne(data);
        res.json(visitante)
    } catch (error) {
        console.error(error)
    }
}

export const deleteVisitante = async(req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const visitante = await visitantes.deleteOne({_id:objectID});
        res.json(visitante)
    } catch (error) {
        console.error(error)
    }
}

export const putVisitante = async(req, res)=> {
    try {
        const { nombre, correo, fecha_visita, edad, ciudad, telefono } = req.body
        const data = {
            nombre, 
            correo, 
            fecha_visita, 
            edad, 
            ciudad, 
            telefono
        }
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const visitante = await visitantes.updateOne(
            {_id: objectID},
            { $set: data}
        )
        res.json(visitante)
    } catch (error) {
        console.error(error)        
    }
}