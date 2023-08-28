const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes');
async function startServer() {
    try {
        // connecting mongodb

        await mongoose.connect('mongodb://localhost:27017/bms', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected successfully');
        // port connection

        app.listen(5001, () => {
            console.log('Server is running at port 5001');
        });

        app.use(express.json())
        app.use(routes)
    } catch (err) {
        console.log(err, "server")
    }
}
startServer()
