import express from "express";
import Connection  from "./database/db.js";
import DefaultData from "./default.js";
import cors from 'cors'
import router from "./routes/route.js";
const app=express();

app.use(cors())
app.use(express.json())
app.use('/',router)
Connection()

app.listen(8000,()=>{
    console.log('Server running on Port 8000');
})
DefaultData()