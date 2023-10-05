import db from '../connection/connection.js'
import { ObjectId } from 'mongodb';

const mariposas = db.collection('mariposas');

export const getMariposas = async (req, res)=> {
    try {
        const mariposa = await mariposas.find().toArray();
        res.json(mariposa)
    } catch (error) {
        console.error(error)
    }
}

export const getMariposa = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const mariposa = await mariposas.findOne({_id: objectID});
        res.json(mariposa)
    } catch (error) {
        console.error(error)
    }
}

export const postMariposa = async (req, res)=>{
    try {
        const {nombre_comun, nombre_cientifico, descripcion, habitat, distribucion, jaula, alimentacion } = req.body;
        const jaulaObjectId = new ObjectId(jaula);
        const alimentacionObjectId = new ObjectId(alimentacion);
        const data = {
            nombre_comun,
            nombre_cientifico,
            descripcion,
            habitat,
            distribucion,
            jaula: jaulaObjectId,
            alimentacion: alimentacionObjectId
        }
        const mariposa = await mariposas.insertOne(data);
        res.json(mariposa)
    } catch (error) {
        console.error(error)
    }

}

export const deleteMariposa = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const mariposa = await mariposas.deleteOne({_id: objectID});
        res.json(mariposa)
    } catch (error) {
        console.error(error)
    }
}

export const putMariposa = async(req, res)=>{
    try {
        const {nombre_comun, nombre_cientifico, descripcion, habitat, distribucion, jaula, alimentacion } = req.body;
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const jaulaObjectId = new ObjectId(jaula);
        const alimentacionObjectId = new ObjectId(alimentacion);
        const data = {
            nombre_comun,
            nombre_cientifico,
            descripcion,
            habitat,
            distribucion,
            jaula: jaulaObjectId,
            alimentacion: alimentacionObjectId
        }
        const mariposa = await mariposas.updateOne(
            {_id:objectID},
            { $set: data}
        );
        res.json(mariposa)
    } catch (error) {
        console.error(error)
    }
}