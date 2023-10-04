import db from "../connection/connection.js";

const visitantes = db.collection('visitantes');

export const getVisitantes = async(req,res)=>{
    try {
       const visitantes = await visitantes.find();
        res.status(302).send(visitantes) 
    } catch (error) {
        console.error(error)
    }
}

export const getVisitante = async(req, res)=>{
    try {
        const visitante = await visitantes.findOne({_id: req.params.id})
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
        const visitante = await visitantes.deleteOne({_id:req.params.id});
        res.status(302).send(visitante)
    } catch (error) {
        console.error(error)
    }
}

export const putVisitante = async(req, res)=> {
    try {
        const visitante = await visitantes.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            { new: true}
        )
        res.status(302).send(visitante)
    } catch (error) {
        console.error(error)        
    }
}