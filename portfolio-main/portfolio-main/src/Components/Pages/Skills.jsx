import React from 'react'
import Clanguage from '../skillsImages/C-Language.png'
import Cpp from '../skillsImages/cpp.png'
import Java from '../skillsImages/java.png'
import Html5 from '../skillsImages/html5.png'
import Css3 from '../skillsImages/css3.png'
import JavaScript from '../skillsImages/javascript.png'
import Reactjs from '../skillsImages/reactjs.png'
import Bootstrap from '../skillsImages/bootstrap.jpg'
import Git from '../skillsImages/git.png'
import Github from '../skillsImages/github.png'
import Oops from '../skillsImages/oops.jpg'
import MERN from '../skillsImages/mern.png'
import Msoffice from '../skillsImages/msoffice.jpg'
import Sql from '../skillsImages/sql.png'
import Wordpress from '../skillsImages/wordpress.jpg'
import Seo from '../skillsImages/seo.png'
import Thunderclient from '../skillsImages/Thunderclient.png'

import { Helmet } from 'react-helmet';





const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills</title>
        <meta name="description" content="Discover my skill set in web development, encompassing front-end and back-end technologies, design frameworks, and programming languages. " />
      </Helmet>

      <div className="all-section">
        <h2>Skills</h2>
        <hr className='horizontal-line' />
        <div className="languages-section">
          <div className="card">
            <img src={Clanguage} alt="c-programming-language" />
            <p>C Language</p>
            <hr className='h-line h-col-1' />
          </div>

          <div className="card">
            <img src={Cpp} alt="c-plus-plus" />
            <p>C++ Language</p>
            <hr className='h-line h-col-2' />
          </div>

          <div className="card">
            <img src={Java} alt="java" />
            <p>Java Basics</p>
            <hr className='h-line h-col-3' />
          </div>

          <div className="card">
            <img src={Html5} alt="hyper-text-markup-language" />
            <p>HTML5</p>
            <hr className='h-line h-col-4' />
          </div>


          <div className="card">
            <img src={Css3} alt="cascading-style-sheet" />
            <p>CSS3</p>
            <hr className='h-line h-col-5' />
          </div>


          <div className="card">
            <img src={JavaScript} alt="javascript" />
            <p>JavaScript</p>
            <hr className='h-line h-col-6' />
          </div>


          <div className="card">
            <img src={Reactjs} alt="reactjs-frontend library" />
            <p>Reactjs</p>
            <hr className='h-line h-col-7' />
          </div>


          <div className="card">
            <img src={Bootstrap} alt="bootstrap - css framework" />
            <p>Bootstrap</p>
            <hr className='h-line h-col-8' />
          </div>



          <div className="card">
            <img src={Github} alt="github" />
            <p>Github</p>
            <hr className='h-line h-col-10' />
          </div>


          <div className="card">
            <img src={Git} alt="git" />
            <p>Git</p>
            <hr className='h-line h-col-9' />
          </div>



          <div className="card">
            <img src={Oops} alt="object-oriented-programming" />
            <p>OOPS</p>
            <hr className='h-line h-col-11' />
          </div>


          <div className="card">
            <img src={MERN} alt="mern stack" />
            <p>MERN Basics</p>
            <hr className='h-line h-col-12' />
          </div>


          <div className="card">
            <img src={Msoffice} alt="microsoft office" />
            <p>MS Office</p>
            <hr className='h-line h-col-13' />
          </div>


          <div className="card">
            <img src={Sql} alt="structured query language" />
            <p>SQL Basics</p>
            <hr className='h-line h-col-14' />
          </div>

          <div className="card">
            <img src={Wordpress} alt="wordpress-website builder" />
            <p>Wordpress</p>
            <hr className='h-line h-col-15' />
          </div>

          <div className="card">
            <img src={Seo} alt="search engine optimization" />
            <p>SEO</p>
            <hr className='h-line h-col-16' />
          </div>


          <div className="card">
            <img src={Thunderclient} alt="thunderclient-api testing" />
            <p>Thunderclient</p>
            <hr className='h-line h-col-17' />
          </div>



        </div>
      </div>




    </>
  )
}

export default Skills