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

projectRouter.get('/docsCount/total', async(req,res)=>{
    const total= await Project.countDocuments()
    res.json({"total":total})
})
projectRouter.get('/docsCount/inprogress', async(req,res)=>{
    const inprogress= await Project.countDocuments({status:"In Progress"})
    res.json({"inprogress":inprogress})
})
projectRouter.get('/docsCount/completed', async(req,res)=>{
    const completed= await Project.countDocuments({status:"Completed"})
    res.json({"completed":completed})
})
projectRouter.get('/docsCount/overdue', async(req,res)=>{
    const overdue= await Project.countDocuments({status:"Overdue"})
    res.json({"overdue":overdue})
})



module.exports=projectRouter