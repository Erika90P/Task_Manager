import express from 'express';
import calendarRoutes from "./routers/calendarRouters.js"
import taskRoutes from "./routers/taskRouters.js";
import userRoutes from "./routers/userRouters.js";

import dotenv from 'dotenv'
dotenv.config()
import './config/database.js'

const app = express()
const PORT = 3000;

app.use(express.json());

// Usar las rutas definidas

app.use('api/router', calendarRoutes);
app.use('/api/task', taskRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.json("this is the 'index' index route, your server is running!")
})


app.listen(PORT, () =>{
    console.log(`you are listening on port http://localhost:${PORT}`)
})