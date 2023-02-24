import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
    
    `
const TimelineTitle = styled.h4`
font-size: 26px;
margin: 10px 0 15px 15px;

`


const ExpandButton = styled.button`
    background-color: #295650; 
  border: none; 
  color: white; 
  padding: 12px 16px; 
  font-size: 16px; 
  cursor: pointer; 
  margin-left: 25px;
  border-radius: 20px;
`

const ExpandButtonText = styled.p`
width: max-content;
font-size: 16px;
margin: 5px 10px;

`

const ExpandButtonParent = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;

`

export default function TimeLine() {

    const [open, setOpen] = useState(true);
    const toggle = () => {
        setOpen(!open);
    }

    return (
        <PillBox>
            <TimelineTitle>My Timeline</TimelineTitle>
            <hr className='horz-line'></hr>
            <br></br>
            <ExpandButtonParent><ExpandButton onClick={toggle} area-expanded={open}>{open ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}</ExpandButton>{open ? <ExpandButtonText>minimise</ExpandButtonText> : <ExpandButtonText>expand</ExpandButtonText>} </ExpandButtonParent>
            {open && (
                <div className='toggle'>
                    <div>





                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#3D8270', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #3D8270' }}
                                date="2022 - present"
                                iconStyle={{ background: '#409899', color: '#fff' }}

                            >
                                <h3 className="vertical-timeline-element-title">Trainee Software Dev</h3>
                                <h4 className="vertical-timeline-element-subtitle">CodeClan</h4>
                                <p>
                                    Codeclan is an intensive Bootcamp aimed at teaching the fundementals of Software Development.
                                    Over the course of 16-weeks, individuals complete over 800 hours worth of hands on coding, through solo and team projects, code-alongs and practical instructor lead lessons.
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="December 2022"
                                contentStyle={{ background: '#409899', color: '#fff' }}
                                iconStyle={{ background: '#3C788F', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #409899' }}
                            >
                                <h3 className="vertical-timeline-element-title">Group App</h3>
                                <h4 className="vertical-timeline-element-subtitle">CodeClan Project</h4>
                                <p>
                                    Group is a mobile app to make planning an event with your friends easier and more convenient.
                                </p>
                                <p>
                                    Built using TypeScript with React Native and a Spring Boot Java backend using a PostgresSQL relational database.
                                </p>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="December 2022"
                                contentStyle={{ background: '#409899', color: '#fff' }}
                                iconStyle={{ background: '#409968', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #409899' }}
                            >
                                <h3 className="vertical-timeline-element-title">Mariana Trench Explorer</h3>
                                <h4 className="vertical-timeline-element-subtitle">CodeClan Project</h4>
                                <p>
                                    An educational web application which takes the user on a journey through the various depths of the Mariana trench.
                                </p>
                                <p>
                                    Full CRUD functionality and built using javascript with React, Node.js and a lightweight express.js backend using a Mondogb non-relational database.


                                </p>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement

                                className="vertical-timeline-element--education"
                                date="November 2022"
                                contentStyle={{ background: '#409968', color: '#fff' }}
                                iconStyle={{ background: '#3C788F', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #409968' }}
                            >
                                <h3 className="vertical-timeline-element-title">Workout Planner</h3>
                                <h4 className="vertical-timeline-element-subtitle">CodeClan Project</h4>
                                <p>
                                    A web application for a weightlifting routine, this allows the user to see their routine and track their achieved weights and reps. Built using Python and Flask, and writing data to an relational SQL database using PostgreSQL.
                                </p>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2019 - 2022"
                                contentStyle={{ background: '#3C788F', color: '#fff' }}
                                iconStyle={{ background: '#409968', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #3C788F' }}
                            >
                                <h3 className="vertical-timeline-element-title">Graduate Piping Engineer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Katoni Engineering</h4>
                                <p>
                                    Katoni Engineering is a specialist Engineering, Procurement and Construction company that offers a range of engineering and consultancy services.
                                </p>
                                <p>
                                    Delivered projects as part of a multiskilled engineering team, designing piping systems using AutoCAD, providing a variety of engineering services and solutions.
                                    Worked to deadlines to meet client expectations within budget.
                                </p>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2018 - 2019"

                                contentStyle={{ background: '#409899', color: '#fff' }}
                                iconStyle={{ background: '#3C788F', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #409899' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Engineering Intern</h3>
                                <h4 className="vertical-timeline-element-subtitle">Katoni Engineering</h4>
                                <p>
                                    Involved in projects that range from small to medium scale structural modifications of FPSOs and oil and gas platforms.
                                </p>
                                <p>
                                    Worked closely within a multidisciplinary team to meet deadlines and refined communication skills via presentations.
                                    Continued to work during academic year on a part-time basis with uncompromising diligence.

                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2014 - 2019"

                                contentStyle={{ background: '#409968', color: '#fff' }}
                                iconStyle={{ background: '#409899', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #409968' }}
                            >
                                <h3 className="vertical-timeline-element-title">Masters of Mechanical Engineering, MEng</h3>
                                <h4 className="vertical-timeline-element-subtitle">The University of Aberdeen</h4>
                                <p>
                                    Achieved a First Class Honours
                                </p>
                                <p>
                                    Modules Included: Project Safety and Management (A4), Design of an Offshore Wind
                                    Farm (A3); Engineering Analysis and Methods (A1); Engineering Materials (A3);
                                    Environmental Engineering (B1);
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                iconStyle={{ background: '#409968', color: '#fff' }}
                            />
                        </VerticalTimeline>
                    </div>


                </div>

            )}

        </PillBox>
    )
}
