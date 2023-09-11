const express = require('express')
const router = express.Router()
const model = require('../module/index')
/* Post Method */
router.post('/movie', async (req, res) => {
    const data = new model({
        imdbID: req.body.imdbID,
        title: req.body.title,
        year: req.body.year,
        runTime: req.body.runTime,
        genre: req.body.genre,
        writer: req.body.writer,
        actors: req.body.actors,
        plot: req.body.plot,
        images: req.body.images,
        imdbRating: req.body.imdbRating
    })
    try {
        const dataToSave = await data.save()
        res.status(201).json(dataToSave)
    } catch (err) {
        res.status(400).json({
            "message": err.message
        })
    }
})

/* Get Method */
router.get('/movies',async(req,res)=>{
    try{
const data=await model.find()
res.json(data)
    }catch(err){
        res.status(500).json({
            "message": err.message

        })
    }
})
/* Get Datas Using ID */
router.get('/movie/:id',async(req,res)=>{
    try{
const data=await model.findById(req.params.id)
res.json(data)
    }catch(err){
        res.status(500).json({
            "message": err.message

        })
    }
})
/* Update Datas */
router.put('/movie/:id',async(req,res)=>{
    try{
const result=await model.findByIdAndUpdate(
    req.params.id,req.body,{
        new:true
    }
    )
res.json(result)
    }catch(err){
        res.status(500).json({
            "message": err.message

        })
    }
})

/* Delete Datas */

router.delete('/movie/:id',async(req,res)=>{
    try{
const result=await model.findByIdAndDelete(
    req.params.id,req.body,{
        "message":'Data Successfully Deleted'
    }
    )
res.json(result)
    }catch(err){
        res.status(500).json({
            "message": err.message

        })
    }
})


module.exports = router