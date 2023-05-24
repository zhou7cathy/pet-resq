import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { Button, Space } from 'antd';
import PetResQ from '../assets/pet-resq.png'

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className='header'>
        <Link to="/">
          <img className='pet-resq-logo'src={PetResQ} alt='pet resQ logo' />
        </Link>
        <h1 className='slogan'>Helping lost pets find their way back home</h1>

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