import React from 'react'
import animals from '../../assets/animals.jpg'

export default function AboutMe() {
  return (
    <div className='about-us'>
      <h2>About Us</h2>
      <img src={animals} alt='animals'/>
      <div>
        <h3>
          What We Do? Free pet finding tools!<br></br>
          Lost or found pet?
        </h3>
      </div>
    </div>
  )
}