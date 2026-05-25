import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <>
        <div className="topbar">
          <h2>Project <span>Compass</span></h2>  

          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/addproject'}>Add Project</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
          </ul>
        </div>
        </>
    )
}

export default Navbar