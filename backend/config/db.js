const monggoose = require('mongoose');

async function connectDB() {
    try{
        await monggoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the database successfully");

    }catch(err){
        console.log("Error connecting to the database",err);
        
    }
    
}

module.exports = connectDB;