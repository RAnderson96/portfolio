import React from 'react'
import Carousel, { CarouselItem } from './Carousel'
import Project1 from './Project1'
import styled from 'styled-components'
import CapstoneProject from './projects/CapstoneProject'
import ReactGroupProject from './projects/ReactGroupProject'
import PythonProject from './projects/PythonProject'



export default function CarouselContainer() {
  return (
    <div className='CarouselContainer' >
      <Carousel>
        <CarouselItem>
          <CapstoneProject></CapstoneProject>
        </CarouselItem>
        <CarouselItem>
          <ReactGroupProject></ReactGroupProject>
        </CarouselItem>
        <CarouselItem>
          <PythonProject></PythonProject>
        </CarouselItem>
      </Carousel>
    </div>
  )
}
