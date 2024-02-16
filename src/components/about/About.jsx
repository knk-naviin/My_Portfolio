import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B.Tech (Hons) Information Technology(UG) <br /><i>Karpagam College of Engineering</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>7.5</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Full Stack (MERN),</li>
                  <li>Flutter Developer,</li>
                  <li>Video Editor</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                   I am seeking a challenging and
fulfilling IT position where I can
leverage my skills and expertise,
contribute to the organization's
growth, and remain adaptable,
innovative, and resourceful.
            </p>

          </div>
      </div>
    </section>
  )
}

export default About