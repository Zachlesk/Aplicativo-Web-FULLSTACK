import db from '../connection/connection.js'

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
        const alimentacion = await alimentaciones.findOne({_id: req.params.id}).toArray();
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
        const alimentacion = await alimentaciones.deleteOne({_id:req.params.id});
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