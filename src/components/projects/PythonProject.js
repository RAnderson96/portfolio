import React from 'react'
import styled from 'styled-components'

export default function PythonProject() {


    const ProjectImage = styled.img`
     padding: 10px;
     width: 300px;
     @media (max-width: 950px) {
        width: 280px

    
    
  }
 `

const CarouselContentParent = styled.div`
display: flex;
flex-direction: row;
width: 70vw;
gap: 5vw;
justify-content: center;
@media (max-width: 950px) {
   flex-direction: column;
   align-items: center;
}
`

const CarouselInfo = styled.div`
width: 40vw;
white-space:pre-wrap;
font-size: 20px;
padding: 10px;
@media (max-width: 950px) {
   font-size: 18px;
   width: 70vw; 
}

`


const LogoLink = styled.a`
text-decoration: none;
font-size: 60px; 
color: #295650;
${LogoLink}:hover {
   color: #95C1B6;
}

`




    return (
        <CarouselContentParent>
            <CarouselInfo>
                <h4>Workout Planner App</h4>
                <hr className='horz-line'></hr>
                <br></br>
                <CarouselInfo>
                    A web application for a weightlifting routine, this allows the user to see their routine and track their achieved weights and reps.
                    The user can add exercises and see completed workouts.
                    Built using Python and Flask, and writing data to an relational SQL database using PostgreSQL.

                </CarouselInfo>
                <br></br>
                <CarouselInfo>
                    <li>
                        Front end design allows for button entries per number of sets based on database values.
                    </li>
                    <li>
                        Full CRUD functionality
                    </li>
                    <li>
                        Built with Python, Flask, SQL, CSS and HTML
                    </li>
                </CarouselInfo>
                <CarouselInfo>
                    <div>
                        <LogoLink href='https://github.com/RAnderson96/Workout_Tracker' target={'_blank'} >
                            <i class="devicon-github-original"></i>
                        </LogoLink>

                    </div>
                </CarouselInfo>

            </CarouselInfo>
            <ProjectImage src='app-picture1.png'></ProjectImage>

        </CarouselContentParent>
    )
}
