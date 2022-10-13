import express from "express";
import Connection  from "./database/db.js";
import DefaultData from "./default.js";
const app=express();

Connection()

app.listen(8000,()=>{
    console.log('Server running on Port 8000');
})
DefaultData()