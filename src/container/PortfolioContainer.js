import React, { useState, useEffect } from 'react'
import TimeLine from '../components/TimeLine';

import "./PortfolioContainer.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Projects from '../components/Projects';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import CarouselContainer from '../components/CarouselContainer';


const PillBox = styled.div`
    background-color: #333130;
    color: white;
    border: 3px solid #333130;
    border-radius: 20px;
    height: max-content;
    width: 75vw;
    margin: auto;
    
    align-content: center;
    padding: 5px 10px;
    align-items: center;
    margin-bottom: 40px;
    @media (max-width: 950px) {
        
  }
    
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
margin-bottom: 40px;
margin-left: 25px;
margin-right: 25px;
@media (max-width: 950px) {
    width: 75vw;
    
    
  }

`


const PillBox3 = styled.div`
    background-color: #333130;
    color: white;
    border: 3px solid #333130;
    border-radius: 20px;
    width: 75vw;
    margin: auto;
    align-content: center;
    padding: 5px 10px;
    align-items: center;
    margin-bottom: 40px;
    @media (max-width: 950px) {
        
  }
    
    `

const LanguagesList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    

`

const AboutParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SkillsParent = styled.div`
    display: flex;
    flex-direction: row;
`


const LanguageCaption = styled.figcaption`
    text-align: center;
    margin-top: 5px;
    font-size: 18px;
    color: white;
    @media (max-width: 950px) {
    font-size: 12px;
  }
 
`

const TechnicalSkillsTitle = styled.h4`
    font-size: 24px;
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

const ContactLogoLink = styled.a`
text-decoration: none;
font-size: 5vw; 
color: #295650;
${ContactLogoLink}:hover {
    color: #95C1B6;
}

`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    padding: 20px;
   
`




function PortfolioContainer() {




    return (

        <div className='content'>
            <NavBar></NavBar>
            <div className="section">
                <h4 className='pageheading' id='about'>About</h4>
                <PillBox>
                    <TechnicalSkillsTitle>Profile</TechnicalSkillsTitle>
                    <hr className='horz-line'></hr>
                    <AboutParent>
                        <div>
                            <img src="profile_pic_v2.png" id='profile_pic' ></img>
                        </div>
                        <div id='about-me-info'>
                            <IntroStatement>
                                'A software developer with a background in Mechanical Engineering'
                            </IntroStatement>
                            <br></br>
                            <p>
                                I am a Junior Software Developer who is completing the CodeClan Professional Software Development Course. Key skills include leadership, problem-solving and analyical skills.

                            </p>
                            <br></br>
                            <p>
                                After completing a 5 year integrated Masters of Mechanical Engineering I worked in the offshore oil and gas sector as a Mechanical engineer for three years before retraining as a Software Developer.
                                I am eager to keep learning and apply my new technical skills in the tech sector.
                            </p>

                        </div>

                    </AboutParent>

                </PillBox>
                <div id='skill-area' >


                    <PillBox2>
                        <TechnicalSkillsTitle>Technical Skills</TechnicalSkillsTitle>
                        <hr className='horz-line'></hr>
                        <div>
                            <LanguagesList>
                                <div className='logo_container'>
                                    <i class="devicon-python-plain"></i>
                                    <LanguageCaption>Python</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-matlab-plain"></i>
                                    <LanguageCaption>MATLAB</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-java-plain"></i>
                                    <LanguageCaption>Java</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-javascript-plain"></i>
                                    <LanguageCaption>JavaScript</LanguageCaption>
                                </div>
                                <div className='logo_container'>
                                    <i class="devicon-typescript-plain"></i>
                                    <LanguageCaption>TypeScript</LanguageCaption>
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
                <div>
                    <TimeLine></TimeLine>
                </div>
            </div>
            <div className='section'>
                <h4 className='pageheading' id='projects'>Projects</h4>
                <PillBox3>
                <div>
                    <CarouselContainer></CarouselContainer>

                </div>
                </PillBox3>
            </div>
            <div className='section'>
                <h4 className='pageheading'>Contact </h4>
                <ContactContainer>
                    <div>
                        <ContactLogoLink href='https://github.com/RAnderson96/' target={'_blank'}  >
                            <i class="devicon-github-original"></i>
                            <LanguageCaption>GitHub</LanguageCaption>
                        </ContactLogoLink>
                    </div>
                    <div>
                        <ContactLogoLink href='https://linkedin.com/in/rory-anderson-892a62137' target={'_blank'}  >

                            <i class="devicon-linkedin-plain"></i>
                            <LanguageCaption>LinkedIn</LanguageCaption>

                        </ContactLogoLink>
                    </div>


                </ContactContainer>
            </div>

        </div>

    )
}


export default PortfolioContainer;