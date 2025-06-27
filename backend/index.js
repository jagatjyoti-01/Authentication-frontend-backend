require('dotenv').config();
const mongoose = require('mongoose');
const express=require('express');
const cors=require('cors');


const app=express();
const port=3000;
app.use(cors({
  origin: 'http://localhost:5173', // only your frontend
  credentials: true
}));
app.use(express.json());
const connectDB = require('./config/db');
const router=require('./routes/index');
app.use("/api",router);



app.get('/',(req,res)=>{
    res.send('Hello World!');
});

connectDB().then(()=>{
app.listen(port,()=>{
    console.log("Connected to the database successfully");
    console.log(`Server is running on port ${port}`);
    })
});