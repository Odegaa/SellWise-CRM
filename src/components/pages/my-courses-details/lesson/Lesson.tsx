import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomTable } from 'src/components';
import { useGetDetailsQuery } from 'src/services/my-course-details/details.api';

import { useLessonColumn } from './useLessonColumn';

const Lesson: React.FC = () => {
  const { id } = useParams();
  const [page, setPage] = React.useState(1);

  const { data, isLoading } = useGetDetailsQuery(Number(id), page);
  const columns = useLessonColumn();

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

export { Lesson };
