import { Link } from "react-router-dom"
import React from "react"
import "./NavBar.css"


const NavBar = () => {

return (


    <nav>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about" >About</Link>
        </li>
        <li>
            <Link to="/projects" >Projects</Link>
        </li>
        <li>
            <Link to="/contact" >Contact</Link>
        </li>
    </nav>
)

}

export default NavBar