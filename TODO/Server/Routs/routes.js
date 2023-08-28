
const express = require('express');
const Task = require('../Models/models');
const router = express.Router();

async function saveTask() {
  try {
    const task = new Task({
      todo: 'Make Lunch',
      isComplete: false
    });
    const doc = await task.save();
    console.log(doc);
    return doc;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

router.get('/', async (req, res) => {
  try {
    const doc = await saveTask();
    res.send(doc); // Sending the saved document as response
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});
router.post('/',(req,res)=>{
  const task=new Task(req.body)
  task.save((err,doc)=>{
    if(err){
      console.log(err)
      res.json(doc)
    }
  })
})
module.exports = router;
