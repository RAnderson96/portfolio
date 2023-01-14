import React, { useState, useEffect } from 'react'


import "./PortfolioContainer.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Projects from '../components/Projects';
import NavBar from '../components/NavBar';
import styled from 'styled-components'

const PillBox = styled.div`
    background-color: #333130;
    color: white;
    border: 3px solid #333130;
    border-radius: 20px;
    height: max-content;
    width: 80vw;
    margin: auto;
    
    align-content: center;
    padding: 5px 10px;
    align-items: center;
    margin-bottom: 10vh;
    
    `
const PillBox2 = styled.div`
background-color: #333130;
color: white;
border: 3px solid #333130;
border-radius: 20px;
height: max-content;
width: 35vw;

align-content: center;
padding: 5px 10px;
align-items: center;
margin-bottom: 5vh;
margin-left: 25px;
margin-right: 25px;

`


const LanguagesList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

`

const AboutParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const SkillsParent = styled.div`
    display: flex;
    flex-direction: row;
`


const LanguageCaption = styled.figcaption`
    text-align: center;
    margin: 5px;
    font-size: 20px;
`

const TechnicalSkillsTitle = styled.h4`
    font-size: 32px;
    margin: 10px 0 15px 15px;
    
    `

const LanguageTitle = styled.h4`
    font-size: 24px;
    margin-left: 10px;
`

const IntroStatement = styled.p`
    text-align: center;
    font-size: 24px;
`


function PortfolioContainer() {




    return (

        <div className='content'>
            <NavBar></NavBar>
            <div className="section">
                <h4 className='pageheading'>About</h4>
                <PillBox>
                    <TechnicalSkillsTitle>Profile</TechnicalSkillsTitle>
                    <hr className='horz-line'></hr>
                    <AboutParent>
                        <div>
                            <img src='profile_pic.png' id='profile_pic' ></img>
                        </div>
                        <div id='about-me-info'>
                            <IntroStatement>
                                'A software developer with a background in Mechanical Engineering'
                            </IntroStatement>
                            <br></br>
                            <p>
                            I am a Junior Software Developer who is completing the CodeClan Professional Software Development Course. Key skills include leadership, problem-solving and analyical skills. 
                            After completing a 5 year integrated Masters of Mechanical Engineering I worked in the offshore oil and gas sector as a Mechanical engineer for three years before retraining as a Software Developer. 
                            I am eager to keep learning and apply my new technical skills in the tech sector.
                            </p>

                        </div>

                    </AboutParent>

                </PillBox>
                <div id='skill-area' >


                    <PillBox2>
                        <TechnicalSkillsTitle>Languages</TechnicalSkillsTitle>
                        <hr className='horz-line'></hr>
                        <div>
                            <LanguagesList>
                                <div className='logo_container'>
                                    <i class="devicon-python-plain"></i>
                                    <LanguageCaption>Python</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-matlab-plain"></i>
                                    <LanguageCaption>Matlab</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-java-plain"></i>
                                    <LanguageCaption>Java</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-javascript-plain"></i>
                                    <LanguageCaption>Javascript</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-postgresql-plain"></i>
                                    <LanguageCaption>PostgreSQL</LanguageCaption>
                                </div>
                                <div className='logo_container'>

                                    <i class="devicon-mongodb-plain"></i>

                                    <LanguageCaption>MongoDB</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-html5-plain"></i>
                                    <LanguageCaption>HTML</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-css3-plain"></i>
                                    <LanguageCaption>CSS</LanguageCaption>
                                </div>
                            </LanguagesList>
                        </div>
                    </PillBox2>

                    <PillBox2>
                        <TechnicalSkillsTitle>Frameworks / Libraries</TechnicalSkillsTitle>
                        <hr className='horz-line'></hr>
                        <div>

                            <LanguagesList>
                                <div className='logo_container'>
                                    <i class="devicon-react-original"></i>
                                    <LanguageCaption>React</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-flask-original"></i>
                                    <LanguageCaption>Flask</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-express-original-wordmark"></i>
                                    <LanguageCaption>Express</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-spring-plain"></i>
                                    <LanguageCaption>Spring</LanguageCaption>
                                </div>

                            </LanguagesList>
                        </div>
                    </PillBox2>

                </div>

            </div>
            <div className='section'>
                <h4 className='pageheading'>Projects</h4>
            </div>
            <div className='section'>
                <h4 className='pageheading'>Contact</h4>
            </div>

        </div>

    )
}


export default PortfolioContainer;