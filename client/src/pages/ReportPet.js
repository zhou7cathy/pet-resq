import { PlusOutlined } from '@ant-design/icons';

import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function ReportPet() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h3> Report Pet Form</h3>
      <div className='report-pet-form'>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ Width: 600 }}
        >
          <Form.Item label="Pet Status">
            <Radio.Group>
              <Radio value="apple"> Lost </Radio>
              <Radio value="pear"> Found </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Location">
            <Input />
          </Form.Item>
          <Form.Item label="Animal Type">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Upload Photo" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload the Photo of Pet Here</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
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