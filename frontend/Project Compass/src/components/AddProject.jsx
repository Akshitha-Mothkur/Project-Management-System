import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './EditProject.css'
import { MdAdd } from "react-icons/md";

function AddProject() {

    
    const [id, setId]=useState(0)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [status, setStatus] = useState("Pending")
    const [progress, setProgress] = useState(0)
    const [github, setGithub] = useState("")
    const [startDate, setStartDate] = useState("")
    const [deadline, setDeadline] = useState("")
    const [techStack, setTechStack] = useState([])
    const [tasks, setTasks] = useState([])
    const [newTask, setnew]= useState({})
   
        function addTask(e){
            e.preventDefault()
            const updated=[...tasks, newTask]
            setTasks(updated)
            setnew({})
        }
        function newProject(e){
            e.preventDefault()
            const newData={
                _id : id,
                title: title,

                desc: desc,

                start_date: startDate,

                tech_stack: techStack,

                status: status,

                tasks: tasks,

                progress: progress,

                deadline: deadline,

                github: github

            }

            axios.post("http://localhost:3000/projects/newProject",newData )
            .then(()=>console.log("Added project"))
        }
    return (
        <div className="project-edit">
            <h2>Add New Project </h2>
            <form action="">
                <label>Id </label>
                <input type="number" name="" id="" value={id} onChange={(e)=>setId(e.target.value)}/>
                <label htmlFor="">Title </label>
                <input type="text" name="" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Description</label>

                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />



                <label>Status</label>

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >

                    <option>Pending</option>

                    <option>In Progress</option>

                    <option>Completed</option>

                    <option>Overdue</option>

                </select>



                <label>Progress</label>

                <input
                    type="number"
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                />



                <label>GitHub Link</label>

                <input
                    type="text"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />



                <label>Start Date</label>

                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />



                <label>Deadline</label>

                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />



                <label>Tech Stack</label>

                <input
                    type="text"
                    value={techStack.join(", ")}
                    onChange={(e) =>
                        setTechStack(e.target.value.split(","))
                    }
                />
                <label>Tasks</label>

                <div className="tasks-container">
                    <div className="task-box">
                        <input
                        type="text"
                        placeholder="Enter task title..."
                        onChange={(e) => {
                            setnew({
                                ...newTask,
                                title: e.target.value
                            })
                            

                        }}
                    />
                        <select

                            value={newTask.priority || "Low"}
                            onChange={(e) => {

                                setnew({
                                    ...newTask,
                                    priority:e.target.value
                                })

                            }}
                        >

                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Urgent</option>

                        </select>
                        <div className="check">

                        <input
                            type="checkbox"
                            
                            onChange={(e) => {

                                setnew({
                                    ...newTask,
                                    completed: e.target.checked
                                })
                            }}
                        />

                        <label htmlFor="">Completed</label>

                    </div>

                        <button className="add-btn" onClick={addTask}><MdAdd/></button>
                    </div>

                    <div className="all-tasks">

                        {
                            tasks.map((task, index) => {

                                return (

                                    <div className="task-box" key={index}>

                                        <input
                                            type="text"
                                            value={task.title}
                                            onChange={(e) => {

                                                const updatedTasks = [...tasks]

                                                updatedTasks[index].title = e.target.value

                                                setTasks(updatedTasks)

                                            }}
                                        />



                                        <select

                                            value={task.priority}

                                            onChange={(e) => {

                                                const updatedTasks = [...tasks]

                                                updatedTasks[index].priority = e.target.value

                                                setTasks(updatedTasks)

                                            }}
                                        >

                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                            <option>Urgent</option>

                                        </select>

                                            

                                        <div className="check">

                                            <input
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={(e) => {

                                                    const updatedTasks = [...tasks]

                                                    updatedTasks[index].completed = e.target.checked

                                                    setTasks(updatedTasks)

                                                }}
                                            />

                                           <label htmlFor="">Completed</label>

                                        </div>

                                    </div>

                                )

                            })
                        }

                    </div>

                </div>

                <button type="submit" onClick={newProject}>
                    Add Project
                </button>
            </form>
        </div>
    )
}

export default AddProject