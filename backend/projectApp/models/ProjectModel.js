const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({

    _id :{
        type: Number},
    title: {
        type: String,
        required: true,
        unique:true
    },

    desc: {
        type: String,
        required: true
    },

    start_date: {
        type: Date,
        default: Date.now()
    },

    tech_stack: [String],

    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed", "Overdue"],
        default: "Pending"
    },
    tasks: [{
        title: {
            type: String,
            
        },

        completed: {
            type: Boolean,
            default: false
        },

        priority: {
            type: String,
            enum: ["Low", "Medium", "High", "Urgent"],
            default: "Medium"
        }
    }],

    deadline:Date,
    github: String

})


const Project= mongoose.model("Project",ProjectSchema,"projects")

module.exports= Project