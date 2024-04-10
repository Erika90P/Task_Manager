import express from 'express';
import mongoose from 'mongoose';
import calendarRoutes from "./routers/calendarRouters.js"
import taskRoutes from "./routers/taskRouters.js";
import userRoutes from "./routers/userRouters.js";
import cookieParser from 'cookie-parser';
import morgan from 'morgan'
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
import './config/database.js'

const app = express()
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(cors())
app.use(morgan('combined'))
app.use(cookieParser());

// Usar las rutas definidas

app.use('/api/calendar', calendarRoutes); 
app.use('/api/task', taskRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.json("this is the 'index' index route, your server is running!")
})


app.listen(PORT, () =>{
    console.log(`you are listening on port http://localhost:${PORT}`)
})