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
      <div className='header-imgs'>
        <img className='pet-resq-logo'src={PetResQ} alt='pet resQ logo' />
        <img className='slogan' src={Slogan} alt='pet resQ slogan' />
      </div>
        <Space wrap className='main-buttons'>
          {Auth.loggedIn() ? (
            <div>
              <Button className="logout-btn" onClick={logout}>
                Logout
              </Button>
              <Link to="/me">
                <Button className="profile-btn">
                  View My Profile
                </Button>
              </Link>
            </div>
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