import db from '../connection/connection.js'
import { ObjectId } from 'mongodb';

const mariposas = db.collection('mariposas');

export const getMariposas = async (req, res)=> {
    try {
        const mariposa = await mariposas.aggregate([{

            $lookup: {
                from: "jaulas",
                localField: "jaula",
                foreignField: "_id",
                as: "jaulas"
            },
        },
        {
            $lookup: {
                from: "alimentacion",
                localField: "alimentacion",
                foreignField: "_id",
                as: "alimentos"
            },
        },
        {
            $unwind: "$alimentos",
        },
        {
            $unwind: "$jaulas"
        },
        {
            $project: {
                _id: 1,
                nombre_comun: 1,
                nombre_cientifico: 1,
                descripcion: 1,
                imagen: 1,
                habitat: 1,
                distribucion: 1,
                "alimentos.nombre": 1,
                "jaulas.nombre": 1
            }
        }

        ]).toArray();
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
        const {nombre_comun, nombre_cientifico, descripcion, imagen, habitat, distribucion, jaula, alimentacion } = req.body;
        const jaulaObjectId = new ObjectId(jaula);
        const alimentacionObjectId = new ObjectId(alimentacion);
        const data = {
            nombre_comun,
            nombre_cientifico,
            descripcion,
            imagen,
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
        const {nombre_comun, nombre_cientifico, descripcion, imagen, habitat, distribucion, jaula, alimentacion } = req.body;
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const jaulaObjectId = new ObjectId(jaula);
        const alimentacionObjectId = new ObjectId(alimentacion);
        const data = {
            nombre_comun,
            nombre_cientifico,
            descripcion,
            imagen,
            habitat,
            distribucion,
            jaula: jaulaObjectId,
            alimentacion: alimentacionObjectId
        }
        const mariposa = await mariposas.updateOne(
            {_id:objectID},
            { $set: data}
        );
        res.send(mariposa);
    } catch (error) {
        console.error(error)
    }
}