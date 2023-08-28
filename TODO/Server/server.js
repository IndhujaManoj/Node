const express=require('express')
const router=require('./Routs/routes')
const app=express()
require('./Models/db')
app.use('/api/tasks',router)
app.use(express.json())
app.use(cors())
app.listen('8000',err=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server is started at port number 8000')
    }
})
