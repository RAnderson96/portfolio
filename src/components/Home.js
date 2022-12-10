import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div>
 
            <div>
                <main>


                    <div>
                        <h1 id='welcome'>Welcome.</h1>
                        <p id="welcome-info">My name is Rory Anderson, I am a trainee software developer based in Edinburgh. I have been working on a variety of projects from React front end designs to full stack development. Here are a few of my projects.</p>
                        <span><a>LinkedIn</a> <a>GitHub</a></span>
                    </div>
                    <div>
                        <h4 id='tech-stack-heading'>Tech Stack and Languages</h4>
                        <div>
                            <ul id="tech-stack-list">
                                <li>Python</li>
                                <li>HTML & CSS</li>
                                <li>Javascript</li>
                                <li>Flask</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 id="projects-home">Projects</h4>
                        <div>
                            <ul className='projects'>
                                <li>PPL Workout Tracker</li>
                                <li>Food Quiz API</li>
                                <li>Group Project: TBC</li>
                            </ul>
                        </div>
                    </div>
                </main>


            </div>
        </div>
    )
}
