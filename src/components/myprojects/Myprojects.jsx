import React from 'react'
import './myprojects.css'

import Shalong from '../../assets/shalong.jpg'
import St from '../../assets/st.jpg'
import Goride from '../../assets/goride.jpg'
import JAVA from '../../assets/java.jpg'
import SIEP from '../../assets/siep.jpg'
import Itest from '../../assets/itest.jpg'
import Mq from '../../assets/mq.jpg'
import story from '../../assets/Story.jpg'
import Pf from '../../assets/pf.jpg'






const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={SIEP} alt="" />
            </div>
            <h3>SIEP E-Bike Challenge 2024 - E-Bike Specfication App</h3>
            <small className='text-light'>Flutter | Firebase(Database)</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/knk-naviin/e_bike_dashboard" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={Shalong} alt="" />
            </div>
            <h3>Shalong</h3>
            <small className='text-light'>Flutter | Firebase(Database)</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/knk-naviin/Shalong-app" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={Goride} alt="" />
            </div>
            <h3>Go Ride (Car Rental Web Site)</h3>
            <small className='text-light'>MERN Stack</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/knk-naviin/GoRide_Car_Rental" target="_blank" rel='noreferrer' className='btn'>Github</a>
                          <a href="https://goridecar.netlify.app/home
" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  

            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={St} alt="" />
            </div>
            <h3>Navir-Stock Management</h3>
            <small className='text-light'>Flutter | Firebase(Database)</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/rajesht1989/navir_stock_management" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={JAVA} alt="" />
            </div>
            <h3>Event Management-Java Console application</h3>
            <small className='text-light'>JAVA</small>
          <div className="portfolio__item-cta">
                          <a href="https://github.com/knk-naviin/EventManagementApp
" target="_blank" rel='noreferrer' className='btn'>Github</a>  

            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={Itest} alt="" />
            </div>
            <h3>iTest-Internet Speed Checking</h3>
            <small className='text-light'>Flutter | Firebase(Database)</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/knk-naviin/iTest" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={Mq} alt="" />
            </div>
            <h3>Marine Ques</h3>
            <small className='text-light'>Flutter | UI/UX</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/rajesht1989/marine_ques" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={story} alt="" />
            </div>
            <h3>Kadhai Neram - Children Story Website</h3>
            <small className='text-light'>Flutter | UI/UX</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vickyadhi/Kathai-Neram" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>

        </article>
         <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={Pf} alt="" />
            </div>
            <h3>Portfolio Website(This Webstie)</h3>
            <small className='text-light'>React Js | UI/UX</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/knk-naviin/My_Portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>

        </article>
      </div>
    </section>
  )
}


export default Myprojects





