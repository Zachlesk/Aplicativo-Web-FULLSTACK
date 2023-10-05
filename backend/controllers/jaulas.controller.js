import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

const jaulas = db.collection('jaulas');

export const getJaulas = async (req, res)=> {
    try {
        const jaula = await jaulas.find().toArray();
        res.json(jaula)
    } catch (error) {
        console.error(error)
    }
}

export const getJaula = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const jaula = await jaulas.findOne({_id: objectID});
        res.json(jaula)
    } catch (error) {
        console.error(error)
    }
}

export const postJaula = async (req, res)=>{
    try {
        const { nombre, descripcion, capacidad, temperatura } = req.body
        const data = {
            nombre,  
            descripcion, 
            capacidad, 
            temperatura
        }
        const jaula = await jaulas.insertOne(data);
        res.json(jaula)
    } catch (error) {
        console.error(error)
    }

}

export const deleteJaula = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const jaula = await jaulas.deleteOne({_id:objectID});
        res.json(jaula)
    } catch (error) {
        console.error(error)
    }
}

export const putJaula = async(req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const { nombre, descripcion, capacidad, temperatura } = req.body
        const data = {
            nombre, 
            descripcion, 
            capacidad, 
            temperatura 
        }
        const jaula = await jaulas.updateOne(
            {_id:objectID},
            { $set: data}
        );
        res.json(jaula)
    } catch (error) {
        console.error(error)
    }
}