/* eslint-disable import/no-extraneous-dependencies */
import { Table, TableProps } from 'antd';
import React from 'react';
import uniqid from 'uniqid';

const CustomTable: React.FC<TableProps> = (props) => (
  <Table
    {...props}
    rowKey={() => uniqid()}
    className="relative rounded-lg overflow-auto lg:w-full bg-white p-2"
  />
);

export { CustomTable };
