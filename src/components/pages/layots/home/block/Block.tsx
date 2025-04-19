import { ArrowUpOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import React from 'react';

type TValue = { value: number; title: string; suffix: boolean };

const Block: React.FC<TValue> = ({ title, value, suffix }) => {
  return (
    <Card className="rounded-sm min-w-[228px] shadow-md">
      <Statistic
        title={title}
        value={value}
        valueStyle={{ color: '#3f8600' }}
        precision={suffix ? 2 : 0}
        suffix={suffix ? '%' : ''}
        prefix={suffix ? <ArrowUpOutlined /> : ''}
      />
    </Card>
  );
};

export { Block };
