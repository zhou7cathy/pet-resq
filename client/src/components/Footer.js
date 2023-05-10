import React from 'react'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Email from '../assets/email.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
        <h6>
        <a href='https://www.facebook.com/'><img className= "icon" src={Facebook} alt= "icon of facebook"/>Facebook</a>
        <a href='https://www.instagram.com/'><img className= "icon" src={Instagram} alt= "icon of Instagram"/>Instagram</a>
        <a href='mailto:admin.petresq@petresq.com'><img className= "icon" src={Email} alt= "icon of Email"/>Email</a>
        </h6>
       </div>
       <h6>Copyright © 2023 Pet ResQ</h6>
    </div>
  )
}