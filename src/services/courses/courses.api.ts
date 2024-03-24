/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  axiosCreateCourse,
  axiosDeleteCourse,
  axiosGetCourseById,
  axiosGetCourses,
  axiosUpdateCourse,
} from './courses.services';
import { TChangeCourse } from './courses.types';

const useGetCoursesQuery = () =>
  useQuery({
    queryFn: axiosGetCourses,
    queryKey: ['courses'],
  });

const useGetCourseByIdQuery = (id: number) => {
  useQuery({
    queryFn: () => axiosGetCourseById(id),
    queryKey: ['courses', id],
  });
};

const useCreateCourseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TChangeCourse) => axiosCreateCourse(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      message.success('Успешно добавлено');
    },
  });
};

const useUpdateCourseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TChangeCourse) => axiosUpdateCourse(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      message.success('Успешно изменено');
    },
  });
};

const useDeleteCourseMuation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => axiosDeleteCourse(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      message.success('Успешно удалено');
    },
  });
};

export {
  useCreateCourseMutation,
  useDeleteCourseMuation,
  useGetCourseByIdQuery,
  useGetCoursesQuery,
  useUpdateCourseMutation,
};
