import React from 'react'
import codsoft from '../certificationImages/codesoft.jpg'
import openWaver from '../certificationImages/openWaver.jpg'
import cppBasics from '../certificationImages/cppBasics.jpg'
import devops from '../certificationImages/devops.jpg'
import reactNode from '../certificationImages/react.jpg'
import { Helmet } from 'react-helmet';


const Certificate = () => {
  return (
    <>
      <Helmet>
      <title>Internships and certifications</title>
      <meta name='description' content='Explore my journey through internships and certifications, showcasing a commitment to continuous learning and professional growth. From hands-on experience gained through internships to valuable certifications earned, each accomplishment demonstrates dedication and expertise in the field of web development.' />
      </Helmet>


      <div className="all-section">
        <h2>Internships</h2>
        <hr className='horizontal-line' />
        <section className='certifications-section'>

          <div className="certification">
            <img src={codsoft} alt="Virtual Internship In WEB DEVELOPMENT" />
            <h3>Virtual Internship Program In WEB DEVELOPMENT</h3>
            <p>In the period of internship created projects like <strong>Personal Portfolio Website, Fully Responsive Landing Page, Calculator by using Javascript, etc. </strong> </p>
          </div>
          <div className="certification">
            <img src={openWaver} alt="virtual-internship-in-full-stack-development" />
            <h3>Virtual Internship In Program FULL STACK DEVELOPMENT</h3>
            <p> <strong>Week 1</strong> - Java basics,<strong>Week 2</strong> - Java medium topics, <strong>Week 3</strong> - HTML CSS JavaScript, <strong>Week 4</strong> - Capstone project in open waver studio.</p>
          </div>
        </section>
      </div>


      <div className="all-section">
        <h2>Other Certifications</h2>
        <hr className='horizontal-line' />
        <section className='other-certifications-section'>

          <div className="certification">
            <img src={devops} alt="devops-for-web-development" />
          </div>
          <div className="certification">
            <img src={cppBasics} alt="c-plus-plus basics" />
          </div>
          <div className="certification">
            <img src={reactNode} alt="javascript-and-reactjs-bootcamp" />
          </div>
        </section>
      </div>

    </>
  )
}

export default Certificate