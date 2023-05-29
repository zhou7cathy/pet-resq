import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Card, Alert } from 'antd';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (value) => {
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="card">
        <Card
          className="card"
          style={{
            width: 400,
          }}
        >
          <h2>Log In</h2>       
          {error && (
            <Alert 
              message={error.message} 
              closable 
              type="error" 
            />
          )}
          <div>
            <Form 
              onFinish={handleFormSubmit}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Form.Item>
              
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input
                  placeholder="Your password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <Link to="/signup">
              <p>
                Don't have an account? Sign Up!
              </p>
            </Link>
          </div>
        </Card>
      </div>

      <div>
        <Link to="/">
          <Button>
            &larr; Go Back
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Login;

 


