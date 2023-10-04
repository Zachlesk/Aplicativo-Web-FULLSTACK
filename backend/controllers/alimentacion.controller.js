import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

const alimentaciones = db.collection('alimentacion');

export const getAlimentaciones = async (req, res)=> {
    try {
        const alimentacion = await alimentaciones.find().toArray();
        res.status(302).send(alimentacion)
    } catch (error) {
        console.error(error)
    }
}

export const getAlimentacion = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const alimentacion = await alimentaciones.findOne({_id: objectID});
        res.status(302).send(alimentacion)
    } catch (error) {
        console.error(error)
    }
}

export const postAlimentacion = async (req, res)=>{
    try {
        const alimentacion = new alimentaciones(req.body);
        const newAlimentacion = await alimentacion.send();
        res.status(302).send(newAlimentacion)
    } catch (error) {
        console.error(error)
    }

}

export const deleteAlimentacion = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const alimentacion = await alimentaciones.deleteOne({_id:objectID});
        res.status(302).send(alimentacion)
    } catch (error) {
        console.error(error)
    }
}

export const putAlimentacion = async(req, res)=>{
    try {
        const alimentacion = await alimentaciones.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true}
        );
        res.status(302).send(alimentacion)
    } catch (error) {
        console.error(error)
    }
}