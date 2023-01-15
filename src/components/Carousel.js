import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "./Carousel.css"


export const CarouselItem = ({ children, width }) => {

    return (
        <div className="carousel-item" style={{ width: width, height:"70vh" }}>
            {children}

        </div>
    );

};



export default function Carousel( {children} ) {
    const [activeIndex, setActiveIndex] = useState(0);

    const [leftClick, setLeftClick] = useState({left: false, right: false})

    const updateClick = () => {

    }


    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) -1;
        }

        setActiveIndex(newIndex)
    }

    

    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                    
                })}

            </div>
            <div className='indicators'>
                <button 
                    onClick={()=>{
                        updateIndex(activeIndex - 1);
                    }}
                > Previous

                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick = {() => {
                                updateIndex(index);
                            }}
                            >
                            {index + 1}
                        </button>
                    )
                })}
                <button 
                    onClick={()=>{
                        updateIndex(activeIndex + 1);
                    }}
                > Next

                </button>


            </div>

        </div>
    )
}
