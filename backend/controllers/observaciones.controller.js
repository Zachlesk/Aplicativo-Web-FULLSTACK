import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

const observaciones = db.collection('observaciones');

export const getObservaciones = async (req, res)=> {
    try {
        const observacion = await observaciones.find().toArray();
        res.status(302).send(observacion)
    } catch (error) {
        console.error(error)
    }
}

export const getObservacion = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const observacion = await observaciones.findOne({_id: objectID});
        res.status(302).send(observacion)
    } catch (error) {
        console.error(error)
    }
}

export const postObservacion = async (req, res)=>{
    try {
        const observacion = new observaciones(req.body);
        const newObservacion = await observacion.send();
        res.status(302).send(newObservacion)
    } catch (error) {
        console.error(error)
    }

}

export const deleteObservacion = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const observacion = await observaciones.deleteOne({_id:objectID});
        res.status(302).send(observacion)
    } catch (error) {
        console.error(error)
    }
}

export const putObservacion = async(req, res)=>{
    try {
        const observacion = await observaciones.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true}
        );
        res.status(302).send(observacion)
    } catch (error) {
        console.error(error)
    }
}