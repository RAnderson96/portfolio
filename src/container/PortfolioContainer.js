import React, { useState, useEffect } from 'react'
import "./PortfolioContainer.css"


function PortfolioContainer() {




    return (

        <div className='content'>
            <header>
                <nav>
                    <ol>
                        <li>
                            About
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            Contact
                        </li>

                    </ol>
                </nav>
            </header>
            <div id='containerMainFooter'>
                <main>


                    <div>
                        <h1 id='welcome'>Welcome.</h1>
                        <p>My name is Rory Anderson, I'm a trainee full stack software developer based in Edinburgh. I have been working on a variety of projects from React front end designs to full stack Flask projects. Here are a few of my projects.</p>
                    </div>

                    <div>
                        <h4>Projects</h4>
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


export default PortfolioContainer;