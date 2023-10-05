import dotenv from 'dotenv';
import express from 'express';

import alimentacion from './routes/alimentacion.routes.js'
import jaulas from './routes/jaulas.routes.js';
import mariposas from './routes/mariposas.routes.js';
import observaciones from './routes/observaciones.routes.js';
import visitantes from './routes/visitantes.routes.js';
import cors from "cors";


console.clear();
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors({origin:"http://localhost:3000"}));
app.use("/alimentacion", alimentacion);
app.use("/jaulas", jaulas);
app.use("/mariposas", mariposas);
app.use("/observaciones", observaciones);
app.use("/visitantes", visitantes);


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})