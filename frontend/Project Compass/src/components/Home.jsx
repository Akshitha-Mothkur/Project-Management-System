import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import './Home.css'
import { Link } from "react-router-dom";

import axios from "axios";
function Home() {

    const [projects, setProject] = useState([])
    const [searchtitle, setSearch] = useState("")
    const [openTaskId, setOpenTaskId] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:3000/projects/")
            .then(res => setProject(res.data))
    }, [])
    console.log(projects)

    function searchHandler(e) {
        e.preventDefault()
        axios.get("http://localhost:3000/projects/title/" + searchtitle)
            .then(res => setProject(res.data))
    }

    return (
        <div className="outer">
            <form action="" className="searchbar" onSubmit={searchHandler}>
                <input type="text" name="" id="" placeholder="search projects..." onChange={(e) => { setSearch(e.target.value) }} />
                <MdSearch onClick={searchHandler} />
            </form>


            <div className="my-projects">
                <h2>
                    My Projects
                </h2>
                {
                    projects.map((data) => {

                        return (
                            <div className="project-card">
                                <div className="top-content">
                                <div className="left">
                                    <h2 className="title">{data.title}</h2>
                                    <p className="desc">{data.desc}..</p>
                                    <p className="date">
                                        <span>start: </span>
                                        {new Date(data.start_date).toLocaleDateString()}
                                    </p>
                                    <p className="date">
                                        <span>deadline: </span>
                                        {new Date(data.deadline).toLocaleDateString()}
                                    </p>
                                    <h3>Tech Stack: </h3>

                                    {
                                        data.tech_stack.map((obj) => {
                                            return (<button className="tech">{obj}</button>)
                                        })
                                    }
                                    <div className="but">
                                        <button className="tasks" onClick={() => {

                                            if (openTaskId === data._id) {
                                                setOpenTaskId(null)
                                            }

                                            else {
                                                setOpenTaskId(data._id)
                                            }

                                        }}>View Tasks</button>
                                        <button className="git"><a href={data.github}>Git Hub</a></button>
                                        <Link to={`/editproject/${data._id}`}><FiEdit title="Edit project" /></Link>
                                    </div>
                                </div>

                                <div className="right">
                                    <h1>{data.progress}%</h1>
                                    <h2>{data.status}</h2>
                                </div>
                                
                                </div>
                                <div className="view-tasks">
                                    { openTaskId === data._id &&
                                        data.tasks.map((obj) => {
                                            return (
                                                <h4>{obj.title}</h4>
                                            )

                                        })
                                    }
                                </div>
                            </div>
                        )
                    })}


            </div>
        </div>
    )
}

export default Home