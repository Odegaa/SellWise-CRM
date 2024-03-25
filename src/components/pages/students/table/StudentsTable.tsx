import React from 'react';
import { CustomTable } from 'src/components';
import { useGetStudentsQuery } from 'src/services/students/students.api';

import { useStudentsColumn } from './useStudentsColumn';

const StudentsTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetStudentsQuery(page);
  const columns = useStudentsColumn();

  return (
    <CustomTable
      loading={isLoading}
      dataSource={data?.data}
      columns={columns}
      pagination={{
        current: page,
        onChange: (currentPage) => setPage(currentPage),
        total: data?.pagination?.total,
      }}
    />
  );
};

export { StudentsTable };
