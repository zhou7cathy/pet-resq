import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import PetResQ from '../assets/pet-resq.png'
import Slogan from '../assets/slogan.png'


export default function Container() {
  return (
    <div>
      {/* <h1>Pet ResQ</h1> */}
      <img src={PetResQ} alt='pet resQ logo' />
      <img src={Slogan} alt='pet resQ slogan' />
      <Navigation className="navigation"/>
      <Footer />
    </div>
  )
}