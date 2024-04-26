/* eslint-disable implicit-arrow-linebreak */
import { useQuery } from '@tanstack/react-query';

import { axiosGetCourseById } from '../courses/courses.services';

import { axiosGetMyCourses } from './myCourses.services';

const useGetMyCoursesQuery = () =>
  useQuery({
    queryFn: axiosGetMyCourses,
    queryKey: ['courses'],
  });

const useGetMyCourseByIdQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetCourseById(id),
    queryKey: ['courses', id],
  });

export { useGetMyCourseByIdQuery, useGetMyCoursesQuery };
