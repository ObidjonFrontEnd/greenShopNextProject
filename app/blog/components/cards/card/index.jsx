// components/WeddingFlowerCard.jsx
'use client';

import { Card } from 'antd';
import { EyeOutlined, MessageOutlined, HeartOutlined } from '@ant-design/icons';

export default function CardComponent({ title, short_description, views, __v, reaction_length }) {
  return (
    <Card
      className='w-full'

    >
      <h2 style={{ marginBottom: 16 }} className='font-bold text-[18px]'>{title}</h2>
      <p style={{ marginBottom: 24 }}>{short_description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #f0f0f0', paddingTop: 12 }}>
        <div><EyeOutlined /> {views}</div>
        <div><MessageOutlined /> {__v}</div>
        <div><HeartOutlined /> {reaction_length}</div>
      </div>
    </Card>
  );
}
