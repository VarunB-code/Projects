import React, { useState } from 'react'
import ProfileImg from '../Images/PhotoFile.jpeg'
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom'



const Sidebar = () => {


  const [sidebarClosed, setSidebarClosed] = useState(true); // Initial state set to true
  const handleSidebarClick = () => {
    setSidebarClosed(!sidebarClosed);
  };



  return (
    <>

      <div className={`sidebar ${sidebarClosed ? 'close' : ''}`}>
        <div className="logo-details">
          <div className="profile-image" style={{ backgroundImage: `url(${ProfileImg})`, padding: '22px' }}>
          </div>
          <span className="logo_name">HelloJagadish</span>
        </div>

        <ul className="nav-links">

          <li>
            <div className="iocn-link">
              <Link to="/">
                <i className='bx bx-home'></i>
                <span className="link_name">Home</span>
              </Link>

            </div>
          </li>


          <li>
            <div className="iocn-link">
              <Link to="/about">
                <i class='bx bx-ghost'></i>
                <span className="link_name">About</span>
              </Link>
            </div>
          </li>


          <li>
            <Link to="/skills">
              <i class='bx bx-code-alt'></i>
              <span className="link_name">Skills</span>
            </Link>
          </li>


          <li>
            <Link to="/projects">
              <i class='bx bx-basketball'></i>
              <span className="link_name">Projects</span>
            </Link>
          </li>


          <li>
            <div className="iocn-link">
              <Link to="/certificates">
                <i class='bx bx-certification' ></i>
                <span className="link_name">Internships</span>
              </Link>
            </div>
          </li>


          <li>
            <Link to="/achievements">
              <i class='bx bxs-wink-smile'></i>
              <span className="link_name">Achievements</span>
            </Link>
          </li>


          <li>
            <Link to="/resume">
              <i class='bx bxs-file-pdf'></i>
              <span className="link_name">Resume</span>
            </Link>
          </li>


          <li>
            <Link to="/contact">
              <i class='bx bxs-contact'></i>
              <span className="link_name">Contact</span>
            </Link>
          </li>
        </ul>
      </div>



      <Dashboard handleClick={handleSidebarClick} />


    </>
  )
}

export default Sidebar