import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './EditProject.css'
import { MdAdd } from "react-icons/md";
import { progressCalc } from "../utils/progressCalc";
function EditProject() {

    const { id } = useParams()
    
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [status, setStatus] = useState("")
    const [progress, setProgress] = useState(0)
    const [github, setGithub] = useState("")
    const [startDate, setStartDate] = useState("")
    const [deadline, setDeadline] = useState("")
    const [techStack, setTechStack] = useState([])
    const [tasks, setTasks] = useState([])
    const [newTask, setnew]= useState({})

    const h2ref=useRef()
    useEffect(() => {
        axios.get("http://localhost:3000/projects/" + id)
            .then((res) => {
                const project = res.data[0]
                setTitle(project.title)
                setDesc(project.desc)
                setStatus(project.status)
                setProgress(project.progress)
                setGithub(project.github)

                setStartDate(project.start_date.slice(0, 10))
                setDeadline(project.deadline.slice(0, 10))

                setTechStack(project.tech_stack)

                setTasks(project.tasks)


            })
    }, [])
        function addTask(e){
            e.preventDefault()
            const updated=[...tasks, newTask]
            setTasks(updated)
            setnew({})
        }
        function updateProject(e){
            
            e.preventDefault()
            const newProgress = progressCalc(tasks)
            console.log("Progress: "+newProgress)
            let newStatus= status
            if (newProgress===100) newStatus="Completed"

            const updatedData={
                
                title: title,

                desc: desc,

                start_date: startDate,

                tech_stack: techStack,

                status: newStatus,

                tasks: tasks,

                progress: newProgress,

                deadline: deadline,

                github: github

            }

            axios.put("http://localhost:3000/projects/update/" + id,updatedData )
            .then((res) => {
                if (h2ref.current) {
                    h2ref.current.innerText = "Project Updated";
                }
                // scroll to top of the page so the user sees the update message
                if (typeof window !== "undefined" && window.scrollTo) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            })

            
        }
    return (
        <div className="project-edit">
            <h2 ref={h2ref}>Edit your Project Here</h2>
            <form action="">
                <label htmlFor="">Title: </label>
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

                <button type="submit" onClick={updateProject} className="update-btn">
                    Update Project
                </button>
            </form>
        </div>
    )
}

export default EditProject