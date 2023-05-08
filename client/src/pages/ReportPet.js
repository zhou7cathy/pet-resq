import { PlusOutlined } from '@ant-design/icons';

import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  Upload,
} from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ANIMAL } from '../utils/mutations';
import { useQuery } from '@apollo/client';
import { QUERY_ANIMAL_TYPES } from '../utils/queries';
import Auth from '../utils/auth';

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ReportPet = (props) => {
  const { Option } = Select;
  const { data } = useQuery(QUERY_ANIMAL_TYPES);
  const animalTypes = data?.animalTypes || [];

  const [formState, setFormState] = useState({ 
    status: '', 
    name: '' ,
    location: '', 
    image: '' ,
    description: '', 
    animalType: '' ,
  });
  const [addAnimal, { error }] = useMutation(ADD_ANIMAL);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const animalTypeHandler = (value) => {
    const { animalType } = value;

    setFormState({
      ...formState,
      animalType: value,
    });
  };

  // submit form
  const handleFormSubmit = async (value) => {
    console.log(formState);
    try {
      const { data } = await addAnimal({
        variables: { ...formState },
      });
      
    } catch (e) {
      console.error(e);
    }
  };


  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h3> Report Pet Form</h3>
      <div className='report-pet-form'>

        <Form
          onFinish={handleFormSubmit}
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 34 }}
          layout="horizontal"
          style={{ Width: 600, }}
        >
          <Form.Item label="Pet Status">
            <Radio.Group
                name="status"
                value={formState.status}
                onChange={handleChange}>
              <Radio value="Lost Pet"> Lost Pet</Radio>
              <Radio value="Found Pet"> Found Pet</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Name">
            <Input 
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item label="Location">
            <Input 
              name="location"
              value={formState.location}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item label="Animal Type">
            <Select
              placeholder="Select animal type"
              onChange={animalTypeHandler}
              optionLabelProp="lable" 
            >
              {animalTypes.map ((animalType) => (
                <Option key= {animalType._id} value={animalType._id} lable={animalType.name}>
                  <div>
                    {animalType.name}
                  </div>
                </Option>
              ))}
            </Select>
          </Form.Item>

          {/* <Form.Item label="Upload Photo" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload the Photo of Pet Here</div>
              </div>
            </Upload>
          </Form.Item> */}

          {/* temp */}
          <Form.Item label="image">
            <Input 
              name="image"
              value={formState.image}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item label="Description">
            <TextArea 
              rows={4} 
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </Form.Item>
          
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>

        {error && (
          <div>
            {error.message}
          </div>
        )}
      </div>

      <div>
        {location.pathname !== '/' && (
          <Button
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </Button>
        )}
      </div>
    </>
  )
}

export default ReportPet;
