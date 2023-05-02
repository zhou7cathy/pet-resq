import React from 'react';
import { Button, Space } from 'antd';
import PetResQ from '../assets/pet-resq.png'
import Slogan from '../assets/slogan.png'


export default function Header() {
  return (
    <div>
      <img src={PetResQ} alt='pet resQ logo' />
      <img src={Slogan} alt='pet resQ slogan' />
      <Space wrap>
        <Button className='login-btn'>Login</Button>
        <Button className='signup-btn'>Sign Up</Button>
      </Space>
    </div>
  )
}