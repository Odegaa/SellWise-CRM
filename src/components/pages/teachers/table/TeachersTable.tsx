import React from 'react';
import { CustomTable } from 'src/components';
import { useGetTeachersQuery } from 'src/services/teachers/teachers.api';

import { useTeachersColumn } from './useTeachersColumn';

const TeachersTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetTeachersQuery(page);
  const columns = useTeachersColumn();

  return (
    <CustomTable
      loading={isLoading}
      dataSource={data?.data.data}
      columns={columns}
      pagination={{
        current: page,
        onChange: (currentPage) => setPage(currentPage),
        total: data?.data.pagination.total,
      }}
    />
  );
};

export { TeachersTable };
