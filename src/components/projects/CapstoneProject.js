import React from 'react'
import styled from 'styled-components'
import test2 from '../media/groupAppScreenRecording.MP4'
export default function CapstoneProject() {


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
                <h4>Group App</h4>
                <hr className='horz-line'></hr>
                <br></br>
                <CarouselInfo>
                    Group is a mobile app to make planning an event with your friends easier and more convenient. We found that often it can be difficult to organise and plan an event using traditional messenger applications.
                    Group allows for a centralised planning platform, where users can see their upcoming events, create and vote on polls and arrange an event with ease.
                    Built using TypeScript with React Native and a Spring Boot Java backend using a PostgresSQL relational database.
                </CarouselInfo>
                <br></br>
                <CarouselInfo>
                    <li>
                        React Native allows for app to be developed for both IOS and Android.
                    </li>
                    <li>
                        Built with TypeScript, React Native and Java Spring Boot
                    </li>
                </CarouselInfo>
                <CarouselInfo>
                    <div>

                        <LogoLink href='https://github.com/RAnderson96/group_app' target={'_blank'}  >
                            <i class="devicon-github-original"></i>
                        </LogoLink>
                    </div>
                </CarouselInfo>

            </CarouselInfo>
            <div>
                <video preload={true} width={'280px'} controls >
                    <source src={test2} type='video/mp4'></source>
                </video>
            </div>

        </CarouselContentParent>
    )
}