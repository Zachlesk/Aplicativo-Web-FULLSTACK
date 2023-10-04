import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

let cnx = undefined

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri)

try {
    cnx = await client.connect();
    console.log("¡Haz sido conectado a la base de datos!")
} catch(error) {
    console.log(error)
}

const db = cnx.db("Celestialfly");

export default db;