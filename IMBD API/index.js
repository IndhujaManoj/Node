// require('dotenv').config()
// const express=require('express')
// const mongoose=require('mongoose')
// const routes=require('./routes/index')
// const mongoString=process.env.DATABASE_URL
// const app=express()
// const cors = require('cors'); 
// // Middleware

// app.use(express.json())
// app.use('/api',routes)
// mongoose.connect(mongoString)
// const database=mongoose.connection;
// database.on('error',(err)=>console.log(err))
// database.on('connected',()=>console.log('Database connected successfully'))

// app.listen(6005,()=>{
//     console.log('Server is running on Port number 6005')
// })
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const mongoString = process.env.DATABASE_URL;
const app = express();
const cors = require('cors');

// Use the cors middleware
app.use(cors());

// Middleware
app.use(express.json());
app.use('/api', routes);

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (err) => console.log(err));
database.on('connected', () => console.log('Database connected successfully'));

const PORT = process.env.PORT || 6005;
app.listen(PORT, () => {
    console.log(`Server is running on Port number ${PORT}`)
})
