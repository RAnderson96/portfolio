import React from 'react'
import styled from 'styled-components'

const ProjectParent = styled.div`
display: flex;
flex-direction: column;

`

export default function Project1() {
    return (
        <ProjectParent>
            <div>
                <img src='app-picture1.png'></img>
            </div>
            <div>
                <p>
                    A web application for a weightlifting routine, this allows the user to see their routine and track their achieved weights and reps. The user can add exercises and see completed workouts. Built using Python and Flask, and writing data to an relational SQL database using PostgreSQL.
                    Front end design allows for button entries per number of sets based on database values.
                    Full CRUD functionality
                    Built with Python, Flask, SQL, CSS and HTML
                </p>
            </div>
        </ProjectParent>
    )
}
