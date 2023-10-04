import db from '../connection/connection.js'
import { ObjectId } from 'mongodb';

const mariposas = db.collection('mariposas');

export const getMariposas = async (req, res)=> {
    try {
        const mariposa = await mariposas.find().toArray();
        res.status(302).send(mariposa)
    } catch (error) {
        console.error(error)
    }
}

export const getMariposa = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const mariposa = await mariposas.findOne({_id: objectID});
        res.status(302).send(mariposa)
    } catch (error) {
        console.error(error)
    }
}

export const postMariposa = async (req, res)=>{
    try {
        const mariposa = new mariposas(req.body);
        const newMariposa = await mariposa.send();
        res.status(302).send(newMariposa)
    } catch (error) {
        console.error(error)
    }

}

export const deleteMariposa = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const mariposa = await mariposas.deleteOne({_id: objectID});
        res.status(302).send(mariposa)
    } catch (error) {
        console.error(error)
    }
}

export const putMariposa = async(req, res)=>{
    try {
        const mariposa = await mariposas.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true}
        );
        res.status(302).send(mariposa)
    } catch (error) {
        console.error(error)
    }
}