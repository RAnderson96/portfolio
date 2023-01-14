import React from 'react'

import styled from 'styled-components'

const PillBox = styled.div`
    padding: 5px;
    background-color: #333130;
    color: white;
    border: 3px solid #333130;
    border-radius: 20px;
`

export default function About() {



    return (
        <div>
            <main>

                <PillBox>
                    <h4>About Me</h4>
                    <p>
                        I am a motivated and driven individual, a quick learner and a keen problem solver who enjoys learning to code.
                        I graduated from the University of Aberdeen with a Masters of Mechanical Engineering in June 2019 and started Codeclan in September of 2022.
                    </p>
                    <p>
                        During my time at University I started coding with Matlab and fell in love with it. In September 2022 I decided to take the leap and change career to retrain as a Full Stack Software Developer with CodeClan. </p>
                    <p>
                        I am very excited for the journey ahead, thanks for reading.
                    </p>

                    
                </PillBox>


            </main>




        </div>

    )
}
