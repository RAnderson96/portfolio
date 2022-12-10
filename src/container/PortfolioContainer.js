import React, { useState, useEffect } from 'react'
import "./PortfolioContainer.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Projects from '../components/Projects';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import ErrorPage from '../components/ErrorPage';
import NavBar from '../components/NavBar';


function PortfolioContainer() {




    return (

        <div className='content'>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>


        </div>

    )
}


export default PortfolioContainer;