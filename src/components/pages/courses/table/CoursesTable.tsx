import React from 'react';
import { CustomTable } from 'src/components';
import { useGetCoursesQuery } from 'src/services/courses/courses.api';

import { useCoursesColumn } from './useCoursesColumn';

const CoursesTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetCoursesQuery();
  const columns = useCoursesColumn();

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

export { CoursesTable };
