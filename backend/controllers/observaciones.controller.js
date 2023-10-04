import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

const observacionest = db.collection('observaciones');

export const getObservaciones = async (req, res)=> {
    try {
        const observacion = await observacionest.find().toArray();
        res.status(302).send(observacion)
    } catch (error) {
        console.error(error)
    }
}

export const getObservacion = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const observacion = await observacionest.findOne({_id: objectID});
        res.status(302).send(observacion)
    } catch (error) {
        console.error(error)
    }
}

export const postObservacion = async (req, res)=>{
    try {
        const { fecha, observador, observaciones} = req.body
        const fechaDate = new Date(fecha);
        const observadorObjectId = new ObjectId(observador);
        const data = {
            fecha: fechaDate,
            observador: observadorObjectId,
            observaciones
        }
        const observacion = await observacionest.insertOne(data);
        res.status(302).send(observacion)
    } catch (error) {
        console.error(error)
    }

}

export const deleteObservacion = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const observacion = await observacionest.deleteOne({_id:objectID});
        res.status(302).send(observacion)
    } catch (error) {
        console.error(error)
    }
}

export const putObservacion = async(req, res)=>{
    try {
        const { fecha, observador, observaciones} = req.body
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const fechaDate = new Date(fecha);
        const observadorObjectId = new ObjectId(observador);
        const data = {
            fecha: fechaDate,
            observador: observadorObjectId,
            observaciones
        }
        const observacion = await observacionest.updateOne(
            {_id: objectID},
            { $set: data}
        );
        res.status(302).send(observacion)
    } catch (error) {
        console.error(error)
    }
}