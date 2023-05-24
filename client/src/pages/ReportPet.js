import { PlusOutlined } from '@ant-design/icons';

import {
  Alert,
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

const { TextArea } = Input;

const ReportPet = (props) => {
  const { Option } = Select;
  const { data } = useQuery(QUERY_ANIMAL_TYPES);
  const animalTypes = data?.animalTypes || [];

  const [formState, setFormState] = useState({ 
    status: '', 
    name: '' ,
    location: '', 
    image: [] ,
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
    setFormState({
      ...formState,
      animalType: value,
    });
  };

  const dummyRequest = ({file, onSuccess}) => {
    onSuccess("ok");
  }

  const imageHandler = (value) => {
    value?.event?.preventDefault();

    const file = value.file.originFileObj;

    // Encode the file using the FileReader API
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);

      var images = [...formState.image];
      images.push(reader.result);

      setFormState({
        ...formState,
        image: images,
      });
    };
    reader.readAsDataURL(file);
  };

  // submit form
  const handleFormSubmit = async (value) => {
    console.log(formState);
    try {
      const { data } = await addAnimal({
        variables: { ...formState },
      });

      window.location.assign('/me');
      
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
          <Form.Item 
            label="Pet Status"
            name="Pet Status"                   
            rules={[{ required: true, message: 'Please select a status' }]}
          >
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

          <Form.Item 
            label="Location"
            name="Location"
            rules={[{ required: true, message: 'Please enter the location' }]}
          >
            <Input 
              name="location"
              value={formState.location}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item 
            label="Animal Type"
            name="Animal Type"
            rules={[{ required: true, message: 'Please select an animal type' }]}
          >
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

          <Form.Item 
            label="Upload Photo"
            name="Upload Photo"
            rules={[{ required: true, message: 'Please upload at least one photo' }]}
          >
            <Upload onChange={imageHandler} customRequest={dummyRequest} listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload the Photo of Pet Here</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item 
            label="Description"
            name="Description"
            rules={[{ required: true, message: 'Please enter the description' }]}
          >
            <TextArea 
              rows={4} 
              name="description"
              placeholder='Please Enter the Pet Description and Contact Detail Here.'
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
      </div>
      {error && (
        <Alert 
          message="Your description need to be at least 20 characters and maximum 500 characters long."
          closable 
          type="error" 
        />
      )}

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
