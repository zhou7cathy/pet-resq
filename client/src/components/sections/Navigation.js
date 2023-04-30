import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AboutUs from '../pages/AboutUs'
import Lost from '../pages/Lost'
import Found from '../pages/Found'
import FAQs from '../pages/FAQs'

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `AboutUs`,
    children: <AboutUs/>,
  },
  {
    key: '2',
    label: `Lost`,
    children: <Lost/>,
  },
  {
    key: '3',
    label: `Found`,
    children: <Found/>,
  },
  {
    key: '4',
    label: `FAQs`,
    children: <FAQs/>,
  },
];

const Navigation: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default Navigation;