import Express from "express"
const app = Express()
const PORT = 3000;

app.get('/', (req, res) => {
    res.json("this is the 'index' index route, your server is running!")
})









app.listen(PORT, () =>{
    console.log(`you are listening on port http://localhost:${PORT}`)
})