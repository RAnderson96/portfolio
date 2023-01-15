import React from 'react'
import Carousel, { CarouselItem } from './Carousel'


export default function CarouselContainer() {
  return (
    <div className='CarouselContainer' >
        <Carousel>
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem>
        </Carousel>
    </div>
  )
}
