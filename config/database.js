import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

// process.env.DATABASE_URI="mongodb+srv://Dios5088:Dios5088@cluster0.gdjscvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

console.log(process.env.DATABASE_URI)
// shortcut to mongoose.connection object
const db = mongoose.connection

// Connect to the database
mongoose.connect(process.env.DATABASE_URI)

db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
db.on('error', err =>{
  console.error(err)
})