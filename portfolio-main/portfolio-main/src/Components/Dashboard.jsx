import React from 'react'
import Home from './Home'
import About from './Pages/About'
import { Routes, Route } from "react-router-dom";
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Certificate from './Pages/Certificate';
import Achievements from './Pages/Achievements';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import Footer from './Footer';




const Dashboard = (props) => {
    return (
        <>


            <section className="home-section bg-black">
                <div className="home-content">
                    <i style={{ color: "white" }} className='bx bx-menu' onClick={props.handleClick}></i>
                    <span style={{ color: "white" }} className="text">Elit. </span>
                </div>

                <Routes>

                    <Route path="/" element={<Home handleSidebar={props.handleClick} />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/skills" element={<Skills />} ></Route>
                    <Route path="/projects" element={<Projects />} ></Route>
                    <Route path="/certificates" element={<Certificate />} ></Route>
                    <Route path="/achievements" element={<Achievements />} ></Route>
                    <Route path="/resume" element={<Resume />} ></Route>
                    <Route path="/contact" element={<Contact />} ></Route>

                </Routes>


                <div class="profile-details">
                    <Footer />
                </div>
            </section>
















        </>
    )
}

export default Dashboard