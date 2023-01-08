import React from 'react'
import "./Projects.css"

export default function Projects() {

    


    return (
        <div>
            <main>
                <h4>Projects</h4>
                <ul id="projects-page-list">
                    <li>
                        <div>
                            <img src='app-picture2.png' alt="placeholder"></img>
                            
                            <div>
                                <h6>PPL Workout Tracker</h6>
                                <p>This is a weightlifting workout app intended for mobile devices. This app allows the user to track the weights and repitions achieved at the gym. It was built using Flask framework and coded in Python. </p>
                                <p><a href='/' >GitHub</a></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='logo192.png' alt="placeholder"></img>
                            <div>
                                <h6>Group Project</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros mauris.</p>
                                <p><a href='/' >GitHub</a></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='logo192.png' alt="placeholder"></img>
                            <div>
                                <h6>Capstone Project</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros mauris.</p>
                                <p><a href='/' >GitHub</a></p>
                            </div>
                        </div>
                    </li>

              
                </ul>
            </main>


        </div>
    )
}
