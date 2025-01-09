import React from 'react'
import firstCoding from '../achievementsImages/firstCoding.jpg'
import secondCoding from '../achievementsImages/secondCoding.jpg'
import secondDance from '../achievementsImages/secondDance.jpg'
import secondDance1 from '../achievementsImages/secondDance1.jpg'
import firstDance from '../achievementsImages/firstDance.jpg'
import { Helmet } from 'react-helmet';


const Achievements = () => {
  return (
    <>
      <Helmet>
        <title>Achievements</title>
        <meta name="description" content="Explore my achievements" />

      </Helmet>

      <div className="all-section">
        <h2>Achievements</h2>
        <hr className='horizontal-line' />
        <section className='achievements-section'>
          <div className="achieve">
            <img src={firstCoding} alt="First-in-coding-at-chikkodi" />
            <h3>1st in Coding at IT FEST KLE'S BCA College, Chikkodi</h3>
          </div>

          <div className="achieve">
            <img src={secondCoding} alt="second-in-coding-at-nippani" />
            <h3>2nd in Coding at IT FEST KLE'S BCA College, Nippani</h3>
          </div>

          <div className="achieve">
            <img src={firstDance} alt="First-in-dance-at-gokak" />
            <h3>1st in Dance at IT FEST KLE'S BCA College, Gokak</h3>
          </div>

          <div className="achieve">
            <img src={secondDance1} alt="second-in-dance-at-chikkodi" />
            <h3>2nd in Dance at IT FEST KLE'S BCA College, Chikkodi</h3>
          </div>

          <div className="achieve">
            <img src={secondDance} alt="second-in-dance-at-nippani" />
            <h3>2nd in Dance at IT FEST KLE'S BCA College, Nippani</h3>
          </div>


        </section>
      </div>



    </>
  )
}

export default Achievements