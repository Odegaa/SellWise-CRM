/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  axiosCreateTeacher,
  axiosDeleteTeacher,
  axiosGetTeacherById,
  axiosGetTeachers,
  axiosUpdateTeacher,
} from './teachers.services';
import { TChangeTeacher } from './teachers.types';

const useGetTeachersQuery = (page: number) =>
  useQuery({
    queryFn: () => axiosGetTeachers(page),
    queryKey: ['teachers', page],
  });

const useGetTeacherByIdQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetTeacherById(id),
    queryKey: ['teachers', id],
  });

const useCreateTeacherMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TChangeTeacher) => axiosCreateTeacher(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teachers'] });
      message.success('Успешно добавлено');
    },
  });
};

const useUpdateTeacherMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TChangeTeacher) => axiosUpdateTeacher(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teachers'] });
      message.success('Успешно изменено');
    },
  });
};

const useDeleteTeacherMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => axiosDeleteTeacher(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teachers'] });
      message.success('Успешно удалено');
    },
  });
};

export {
  useCreateTeacherMutation,
  useDeleteTeacherMutation,
  useGetTeacherByIdQuery,
  useGetTeachersQuery,
  useUpdateTeacherMutation,
};
