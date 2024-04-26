/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  axiosCreateDetail,
  axiosDeleteDetail,
  axiosGetDetails,
  axiosUpdateDetail,
} from './details.services';
import { TChangeDetails } from './details.types';

const useGetDetailsQuery = (lessondId: number, page: number) =>
  useQuery({
    queryFn: () => axiosGetDetails(lessondId, page),
    queryKey: ['details', lessondId, page],
  });

const useCreateDetailMutation = (lessonId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TChangeDetails) => axiosCreateDetail(lessonId, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['details', lessonId] });
      message.success('Успешно добавлено');
    },
  });
};

const useUpdateDetailMutation = (lessonId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TChangeDetails) => axiosUpdateDetail(lessonId, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['details', lessonId] });
      message.success('Успешно изменено');
    },
  });
};

const useDeleteDetailMutation = (lessonId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => axiosDeleteDetail(lessonId, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['details', lessonId] });
      message.success('Успешно удалено');
    },
  });
};

export {
  useCreateDetailMutation,
  useDeleteDetailMutation,
  useGetDetailsQuery,
  useUpdateDetailMutation,
};
