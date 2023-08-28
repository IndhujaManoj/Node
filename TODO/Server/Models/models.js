const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
    todo:String,
    isComplete:Boolean
})
const Task=mongoose.model('task',TaskSchema) //collection's singular form
module.exports=Task