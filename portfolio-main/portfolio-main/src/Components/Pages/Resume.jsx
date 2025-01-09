import React from 'react'
import ResumePath from '../MyResume/JagadishMadavalkarResume.pdf'
import { Helmet } from 'react-helmet';


const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Resume</title>
        <meta name="description" content="Checkout my resume and know more about me." />
      </Helmet>
      <div className="all-section">
        <h2>Resume</h2>
        <hr className='horizontal-line' />
        <section className='Resume-section'>

          <iframe src={ResumePath} frameborder="0" title='JagadishResume' width="100%" height="600px"></iframe>

        </section>
      </div>
    </>
  )
}

export default Resume