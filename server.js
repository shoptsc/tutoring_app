/*
    1. Create an Express Server
    2. Connect to MongoDB
    3. Initialize Express
    4. Initialize Express Middleware
    5. Create a simple get request route 
    6. Inject our Route
    7. Listen to our app
*/

require("dotenv/config");
const express = require("express");
const {connectDB} = require("./db");

// Deconstruct 
const {PORT} = process.env;

// Connect to DB
connectDB();

// Initailize Express
const app = express();

// Initialize Express Middleware
app.use(express.json({extended : false}));


//  Create a basic express route
app.get("/", (req, res)=>{
    res.json({
        message : "Welcome to Tutoring Application"
    })
})


// PORT
const port = process.env.PORT || PORT || 5000;

// Listen to Connection
app.listen(port, ()=>console.log(`App Running on port ${port}`))