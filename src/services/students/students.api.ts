/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  axiosCreateStudent,
  axiosDeleteStudent,
  axiosGetStudentById,
  axiosGetStudents,
  axiosUpdateStudent,
} from './students.services';
import { TChangeStudent } from './students.types';

const useGetStudentsQuery = (page: number) =>
  useQuery({
    queryFn: () => axiosGetStudents(page),
    queryKey: ['students', page],
  });

const useGetStudentByIdQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetStudentById(id),
    queryKey: ['students', id],
  });

const useCreateStudentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TChangeStudent) => axiosCreateStudent(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      message.success('Успешно добавлено');
    },
  });
};

const useUpdateStudentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TChangeStudent) => axiosUpdateStudent(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      message.success('Успешно изменено');
    },
  });
};

const useDeleteStudentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => axiosDeleteStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      message.success('Успешно удалено');
    },
  });
};

export {
  useCreateStudentMutation,
  useDeleteStudentMutation,
  useGetStudentByIdQuery,
  useGetStudentsQuery,
  useUpdateStudentMutation,
};
