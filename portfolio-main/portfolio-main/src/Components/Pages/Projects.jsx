import React from 'react'
import perfectMatch from '../projectImages/perfect.JPG'
import MomentMakers from '../projectImages/momentMakers.JPG'
import { Helmet } from 'react-helmet';


const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="Discover Jagadish Madavalkars projects: from a custom matrimonial website to an easy event manager and a clever text transformer. See how each project showcases creativity and technical skill" />
      </Helmet>
      <div className="all-section">
        <h2>Projects</h2>
        <hr className='horizontal-line' />
        <section className='projects-section'>
          <div className="projects">
            <img src={perfectMatch} alt="" />
            <h3 style={{ marginTop: "2px" }}>Matrimonial Website - Perfect Match ( <a rel="noreferrer" target='_blank' href="https://github.com/jagadish-7/Simple-Matrimonial-Website">Link</a> )</h3>
            <p>Welcome to Perfect Match, your go-to platform for finding your ideal life partner. This matrimonial website, built using the MERN stack, offers a seamless experience for creating user profiles, searching for potential matches, and connecting with others.</p>
            <h4>Tech Stack Used</h4>
            <ul>
              <li><b>M</b>ongoDB</li>
              <li><b>E</b>xpressJS</li>
              <li><b>R</b>eactJS</li>
              <li><b>N</b>odeJS</li>
              <li>Bootstrap</li>
            </ul>
            <h4>Packages Used</h4>
            <ul className='mb'>
              <li>React-router-dom</li>
              <li>React-bootstrap</li>
              <li>Nodemon</li>
              <li>Concurrently</li>
              <li>Cors</li>
              <li>Express-validator</li>
              <li>Bcryptjs</li>
              <li>Json Web Token</li>
              <li>Express</li>
              <li>Mongoose</li>
              <li>Multer</li>
              <li>Nodemailer</li>
              <li>Axios</li>
            </ul>
          </div>

          <div className="projects">
            <img src={MomentMakers} alt="" />
            <h3 >Event Management - Moment Makers ( <a rel="noreferrer" target='_blank' href="https://github.com/jagadish-7/Event-management-website">Link</a> ) </h3>
            <p>Welcome to the Event Management Website project! This web application provides a platform for organizing and managing events. Users can create accounts, send messages to event organizers, and enjoy a seamless event booking experience.</p>
            <h4>Tech Stack Used</h4>
            <ul>
              <li><b>M</b>ongoDB</li>
              <li><b>E</b>xpressJS</li>
              <li><b>R</b>eactJS</li>
              <li><b>N</b>odeJS</li>
              <li>Bootstrap</li>
            </ul>
            <h4>Packages Used</h4>
            <ul className='mb'>
              <li>React-router-dom</li>
              <li>React-bootstrap</li>
              <li>Nodemon</li>
              <li>Concurrently</li>
              <li>Cors</li>
              <li>Express-validator</li>
              <li>Bcryptjs</li>
              <li>Json Web Token</li>
              <li>Express</li>
              <li>Mongoose</li>
              <li>Multer</li>
              <li>Nodemailer</li>
              <li>Axios</li>
            </ul>
          </div>
        </section>
      </div>


      <div className="all-section">
        <h2>Client Projects - Hosted</h2>
        <hr className='horizontal-line' />

        <section className="hosted-projects">
          <div className="web-name">
            <a rel="noreferrer" target="_blank" href="https://macxconverge.com">Macxconverge.com</a>
          </div>

          <div className="web-display">
            <iframe title="hosted-projects-frame" src="https://macxconverge.com"
              height="700px" width="100%">
            </iframe>
          </div>

        </section>

      </div>


    </>
  )
}

export default Projects