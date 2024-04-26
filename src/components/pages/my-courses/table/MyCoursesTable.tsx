import React from 'react';
import { CustomTable } from 'src/components';
import { useGetMyCoursesQuery } from 'src/services/my-courses/myCourses.api';

import { useMyCoursesColumn } from './useMyCoursesColumn';

const MyCoursesTable: React.FC = () => {
  const { data, isLoading } = useGetMyCoursesQuery();
  const columns = useMyCoursesColumn();

  return <CustomTable loading={isLoading} dataSource={data?.data} columns={columns} />;
};

export { MyCoursesTable };
