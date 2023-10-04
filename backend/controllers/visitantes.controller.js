import db from "../connection/connection.js";
import { ObjectId } from 'mongodb';

const visitantes = db.collection('visitantes');

export const getVisitantes = async(req,res)=>{
    try {
       const visitante = await visitantes.find().toArray();
        res.status(302).send(visitante) 
    } catch (error) {
        console.error(error)
    }
}

export const getVisitante = async(req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const visitante = await visitantes.findOne({_id: objectID})
        res.status(302).send(visitante)
    } catch (error) {
        console.error(error)
    }
}

export const postVisitante = async(req, res)=>{
    try {
        const visitante = new visitantes(req.body);
        const newVisitante = await visitante.save();   
        res.status(302).send(newVisitante)
    } catch (error) {
        console.error(error)
    }
}

export const deleteVisitante = async(req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const visitante = await visitantes.deleteOne({_id:objectID});
        res.status(302).send(visitante)
    } catch (error) {
        console.error(error)
    }
}

export const putVisitante = async(req, res)=> {
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const visitante = await visitantes.findOneAndUpdate(
            {_id: objectID},
            req.body,
            { new: true}
        )
        res.status(302).send(visitante)
    } catch (error) {
        console.error(error)        
    }
}