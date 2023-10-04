import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

const jaulas = db.collection('jaulas');

export const getJaulas = async (req, res)=> {
    try {
        const jaula = await jaulas.find().toArray();
        res.status(302).send(jaula)
    } catch (error) {
        console.error(error)
    }
}

export const getJaula = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const jaula = await jaulas.findOne({_id: objectID});
        res.status(302).send(jaula)
    } catch (error) {
        console.error(error)
    }
}

export const postJaula = async (req, res)=>{
    try {
        const jaula = new jaulas(req.body);
        const newJaula = await jaula.send();
        res.status(302).send(newJaula)
    } catch (error) {
        console.error(error)
    }

}

export const deleteJaula = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const jaula = await jaulas.deleteOne({_id:objectID});
        res.status(302).send(jaula)
    } catch (error) {
        console.error(error)
    }
}

export const putJaula = async(req, res)=>{
    try {
        const jaula = await jaulas.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true}
        );
        res.status(302).send(jaula)
    } catch (error) {
        console.error(error)
    }
}