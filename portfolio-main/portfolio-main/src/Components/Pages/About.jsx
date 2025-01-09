import React from 'react'
import photoFile from '../projectImages/PhotoFile.jpeg'
import { Helmet } from 'react-helmet';


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta name='description' content='Explore more about me and my background. ' />
      </Helmet>

      <div className="all-section">
        <h2>About</h2>
        <hr className='horizontal-line' />
        <section className='about-section'>

          <div className="left-about-section">
            <h3>Jagadish Vithal Madavalkar</h3>

            <p>
              Hello, my name is Jagadish. I am a BCA student specialized in Computer applications with an overall  CGPA of 7.94 till now. I have scored 72% in my PUC And 80% in my SSLC examination. I have knowledge of web development technologies such as <b style={{ color: "white" }}>HTML, CSS, Javascript, Reactjs, Bootstrap, MERN Stack, Git, and github.</b>  Along with that I also have a basic knowledge of programming languages such as <b style={{ color: "white" }}> C, C++ and java.</b> I feel myself more comfortable with C and C++ language.
            </p>
          </div>

          <div className="right-about-section">
            <img src={photoFile} alt="jagadish-madavalkar" />
          </div>

        </section>
      </div>



    </>
  )
}

export default About