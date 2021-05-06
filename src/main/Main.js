import React from 'react'
import '../index.css'
import Home from '../Components/Home'
import Nav from '../Components/Nav'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Works from '../Components/Works'
import Footer from '../Components/Footer'
import Resume from '../Components/Resume'

function Main() {
    return (
        <div className="main-container">
            <Nav/>
            <Home/>     
            <About/>
            <Resume/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Main
