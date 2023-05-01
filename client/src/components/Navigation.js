import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AboutUs from '../pages/AboutUs'
import Lost from '../pages/Lost'
import Found from '../pages/Found'
import FAQs from '../pages/FAQs'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `About Us`,
    children: <AboutUs/>,
  },
  {
    key: '2',
    label: `Lost Pet`,
    children: <Lost/>,
  },
  {
    key: '3',
    label: `Found Pet`,
    children: <Found/>,
  },
  {
    key: '4',
    label: `FAQs`,
    children: <FAQs/>,
  },
];

export default function Navigation() {
  return (
    <div>
        <Tabs defaultActiveKey="1" items={items} />;
    </div>
  )
}
