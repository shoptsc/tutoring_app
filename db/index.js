/*
    1. Creating a connection function for mongodb
    2. Start a local mongodb server connection
*/


const mongoose = require("mongoose");
const {MONGO_URI} = process.env

// Creaye the Connection Function
exports.connectDB = async () =>{
   
    try{
        await mongoose.connect(MONGO_URI, {
            useCreateIndex : true,
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindAndModify : false
        })
        console.log(`MongoDB Connected Successfully`)
        // send Data
    }catch(error){
        console.log(error.message);
        process.exit(1)
    }
   
}