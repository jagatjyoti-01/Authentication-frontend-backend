const express=require('express');
const cors=require('cors');
const connectDB = require('./config/db');

const app=express();
const port=3000;
app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('Hello World!');
});

connectDB().then(()=>{
app.listen(port,()=>{
    console.log("Connected to the database successfully");
    console.log(`Server is running on port ${port}`);
    })
});