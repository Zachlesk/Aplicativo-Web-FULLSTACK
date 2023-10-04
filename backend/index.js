import dotenv from 'dotenv';
import express from 'express';
import visitantes from './routes/visitantes.routes.js'
import mariposas from './routes/mariposas.routes.js'

console.clear();
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/visitantes", visitantes);
app.use("/mariposas", mariposas);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})