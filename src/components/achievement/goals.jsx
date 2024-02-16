import React from 'react'
import './goals.css'
import SIEP from '../../assets/siep.jpg'


const goals = () => {
  return (
    <section id='goals'>

     
      <h2>Achievements</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={SIEP} alt="" />
            </div>
            <h3>SIEP E-Bike Challenge 2024</h3>
            <small className='text-light'>Our Team Yolo has secured the first position in the hill
climb category of the SIEP India E-Bike Challenge Event of
2024, surpassing all other participants across India.
</small>
            <div className="portfolio__item-cta">
            </div>
              
        </article>
        

      </div>
    </section>
  )
}


export default goals