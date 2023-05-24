import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Card, Alert } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
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
          <h2>Sign Up</h2>
          {error && (
            <Alert 
              message= "You password needs to be at least 8 characters long."
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
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input
                    placeholder="Your name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </Form.Item>

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
              <Link to="/Login">
                <p className=''>
                  Already registered? Sign in!
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

export default Signup;
