import React from 'react';
import { Button, Space } from 'antd';
import Navigation from './Navigation'
import Footer from './Footer'
import PetResQ from '../assets/pet-resq.png'
import Slogan from '../assets/slogan.png'


export default function Container() {
  return (
    <div>
      <img src={PetResQ} alt='pet resQ logo' />
      <img src={Slogan} alt='pet resQ slogan' />
      <Space wrap>
        <Button className='login-btn'>Login</Button>
        <Button className='signup-btn'>Sign Up</Button>
      </Space>
      <Navigation className="navigation"/>
      <Footer />
    </div>
  )
}