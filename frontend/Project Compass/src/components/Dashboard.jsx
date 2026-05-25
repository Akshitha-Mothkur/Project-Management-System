import React,{useState,useEffect} from "react";
import './Dashboard.css'
function Dashboard(){
    const [total,setTotal]=useState(0)
    const [completed,setCompleted]=useState(0)
    const [inProgess,setProgress]=useState(0)
    const [overdue,setOverdue]=useState(0)
    return(
        <>
        <div className="outer">
            <h2 className="dash">Dashboard</h2>

            <div className="inner">
                <div className="total">
                    <h3>Total</h3>
                    <h2>{total}</h2>
                </div>
                <div className="completed">
                    <h3>Completed</h3>
                    <h2>{completed}</h2>
                </div>
                <div className="progess">
                    <h3>In Progress</h3>
                    <h2>{inProgess}</h2>
                </div>
                <div className="overdue">
                    <h3>Overdue</h3>
                    <h2>{overdue}</h2>
                </div>
            </div>
        </div>
        </>

    )
}

export default Dashboard