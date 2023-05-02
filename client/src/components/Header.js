import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { Button, Space } from 'antd';
import PetResQ from '../assets/pet-resq.png'
import Slogan from '../assets/slogan.png'


export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className='header'>
      <img src={PetResQ} alt='pet resQ logo' />
      <img src={Slogan} alt='pet resQ slogan' />
        <Space wrap>
          {Auth.loggedIn() ? (
            <Button className="logout-btn" onClick={logout}>
              Logout
            </Button>
          ) : (
            <>
              <Link className="login-btn" to="/Login">
                <Button>
                  Login
                </Button>
              </Link>
              <Link className="signup-btn" to="/Signup">
                <Button>
                  Signup
                </Button>
              </Link>
            </>
          )}
        </Space>
    </div>
  )
}