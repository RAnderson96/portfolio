import React from 'react'
import styled from 'styled-components'
import video1 from '../media/marianaTrench.mp4'

export default function ReactGroupProject() {


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
     font-size: 26px;
     padding: 10px;
     @media (max-width: 950px) {
        font-size: 18px;
        width: 70vw; 
  }

 `
    const bulletPoints = styled.li`
     padding: 5px;
 `
    const VideoContainer = styled.div`
    
     
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
                <h4>Mariana Trench App</h4>
                <hr className='horz-line'></hr>
                <br></br>
                <CarouselInfo>
                    An educational web application which takes the user on a journey through the various depths of the Mariana trench.
                    Each level has multimedia information on things the user could encounter on their journey. The user can take a quiz on the information they have learned and set their place in the leaderboard.
                    Built using javascript with React, Node.js and a lightweight express.js backend using a Mondogb non-relational database.
                </CarouselInfo>
                <br></br>
                <CarouselInfo>
                    <li>
                        Usage of non-relational database to populate various facts and quiz questions throughout the app.
                    </li>
                    <li>
                        Full CRUD functionality
                    </li>
                    <li>
                        Built with Javascript, React, MongoDB, HTML, CSS
                    </li>
                </CarouselInfo>
                <CarouselInfo>
                    <div>
                        <LogoLink href='https://github.com/RAnderson96/Mariana_Trench_app' target={'_blank'} >
                            <i class="devicon-github-original"></i>
                        </LogoLink>

                    </div>
                </CarouselInfo>

            </CarouselInfo>
            <VideoContainer>
                <video preload={true} width={'280px'} controls >
                    <source src={video1} type='video/mp4'></source>
                </video>
            </VideoContainer>

        </CarouselContentParent>
    )
}