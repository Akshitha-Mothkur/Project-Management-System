const Project = require('../models/ProjectModel')
const express = require('express');
const projectRouter= express.Router()

projectRouter.get('/',async (req,res)=>{
    const projects= await Project.find()
    res.send(projects)
})

projectRouter.get('/title/:title',async(req,res)=>{
    const project = await Project.find({title: req.params.title});
    res.send(project)
})
projectRouter.get('/:id',async(req,res)=>{
    const project = await Project.find({_id:req.params.id});
    res.json(project)
})

projectRouter.post("/newproject",async(req,res)=>{
    const new_project= new Project(req.body)
    new_project.save()
    res.send("Project added")
})

projectRouter.put('/update/:id',async(req,res)=>{
    
    await Project.findByIdAndUpdate(req.params.id,req.body)
    res.send("updated succesfully")
})


projectRouter.delete('/delete/:id', async(req,res)=>{
    await Project.findByIdAndDelete(req.params.id)
    res.send("Project deleted")
})
module.exports=projectRouter