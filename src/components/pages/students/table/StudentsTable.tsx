import React from 'react';
import { CustomTable } from 'src/components';
import { useGetStudentsQuery } from 'src/services/students/students.api';

import { useStudentsColumn } from './useStudentsColumn';

const StudentsTable: React.FC = () => {
  const { data, isLoading } = useGetStudentsQuery();
  const columns = useStudentsColumn();

  return (
    <CustomTable
      loading={isLoading}
      dataSource={data?.data}
      columns={columns}
      pagination={data?.pagination}
    />
  );
};

export { StudentsTable };
