import React from 'react'
import HomeImage from '../Images/WebD.svg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';



const Home = (props) => {
  return (
    <>
      <Helmet>
        <title>Welcome to my portfolio.</title>
      </Helmet>
      <div className="all-section bg-black">
        <h2>Home</h2>
        <hr className='horizontal-line' />
        <div className="home-main-content bg-black">

          <div className="left-section">
            <h2>Hii, I'm a Full Stack Web Developer.</h2>
            <h3>If at first you don’t succeed; call it version 1.0</h3>
            <Link className='home-button' to="/about">ABOUT ME</Link>
          </div>

          <div className="right-section">
            <img src={HomeImage} alt="home-page" />
          </div>
        </div>
      </div>
    </>



  )
}

export default Home