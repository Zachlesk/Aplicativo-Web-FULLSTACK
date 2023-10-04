import db from '../connection/connection.js'

const mariposas = db.collection('mariposas');

export const getMariposas = async (req, res)=> {
    try {
        const mariposas = await mariposas.find().toArray();
        res.status(302).send(mariposas)
    } catch (error) {
        console.error(error)
    }
}

export const getMariposa = async (req, res)=>{
    try {
        const mariposa = await mariposas.findOne({_id: req.params.id}).toArray();
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
        const mariposa = await mariposas.deleteOne({_id:req.params.id});
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