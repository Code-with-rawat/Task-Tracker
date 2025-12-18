// Server.js file is a Starting point in a backend application. 

// Import express here 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
require('dotenv').config();// .env file only  used for  Secrets JWT secrets and Mongo url safely. 

// I create a main name app and This app runs my all backend(yehi App mera backned ko run krega) 
const main = express();
main.use(cors());
main.use(express.json());


//code for Routes 
const authenticateRoutes = require('./Routes/authenticateRoutes');
const taskingRoutes = require('./Routes/taskingRoutes')

main.use("/api/auth", authenticateRoutes);
main.use("/api/tasking", taskingRoutes)


//mongoose connection
mongoose.connect(process.env.MONGO_LINK)
.then(()=>{console.log('Mongoose Success')})
.catch((err)=>{console.log('DB error :', err)});

// For listen k liye  
main.listen(8000,()=>{console.log('Success')});
