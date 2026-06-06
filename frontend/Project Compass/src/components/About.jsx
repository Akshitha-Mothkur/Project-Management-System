import React from 'react'
import './About.css'

function About(){
    return (
        <div className="about-page">
            <div className="about-container">
                <h2>About Project <span>Compass</span></h2>
                <p className="lead">Project Compass is a lightweight project management UI built to track tasks, progress and timelines.</p>

                <div className="about-cards">
                    <div className="card">
                        <h3>Purpose</h3>
                        <p>Helps teams and individuals plan work, monitor progress and keep project details in one place.</p>
                    </div>

                    <div className="card">
                        <h3>Tech</h3>
                        <p>Built with React, React Router and a simple Express backend for persistence.</p>
                    </div>

                    <div className="card">
                        <h3>How to Use</h3>
                        <p>Add projects, define tasks, update progress and use the dashboard to get a quick overview.</p>
                    </div>
                </div>

                <p className="small">Made with ❤️ — keep iterating and have fun building.</p>
            </div>
        </div>
    )
}

export default About
