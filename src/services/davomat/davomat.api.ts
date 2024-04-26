/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { axiosGetDavomat, axiosPostDavomat } from './davomat.services';
import { TPostDavomat } from './davomat.types';

const useGetDavomatQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetDavomat(id),
    queryKey: ['davomat', id],
  });

const usePostDavomatMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TPostDavomat) => axiosPostDavomat(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['davomat', id] });
      message.success('Успешно');
    },
    onError: () => {
      message.error('Ошибка!');
    },
  });
};

export { useGetDavomatQuery, usePostDavomatMutation };
