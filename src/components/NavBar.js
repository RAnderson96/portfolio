import { Link } from "react-router-dom"
import React from "react"
import "./NavBar.css"




const NavBar = () => {

    return (


        <nav id="navparent1">
            <div id="MyName">
                <h4>Rory Anderson</h4>
                <h5>Software Developer</h5>
            </div>
            <div className="navelement">
                <a href="#about">
                    <h4>About</h4>
                </a>
            </div>
            <div className="navelement">
                <a href="#projects" >
                    <h4>Projects</h4>
                </a>

            </div>
    
        </nav>
    )

}

export default NavBar