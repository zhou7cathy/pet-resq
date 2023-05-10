import React from 'react'
import { Link } from 'react-router-dom';
import animals from '../assets/animals.png'
import { Button, Space } from 'antd';

export default function AboutMe() {
  return (
    <div className='about-us'>
      <h2>About Us</h2>
      <img src={animals} alt='animals'/>
      <div>
        <h3>
          What We Do? Free pet finding tools!<br></br>
          Lost or found pet?<br></br>
          Log In or Sign Up to report a pet!
        </h3>
      </div>
    </div>
  )
}