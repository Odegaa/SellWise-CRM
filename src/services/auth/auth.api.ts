/* eslint-disable import/no-extraneous-dependencies */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getMe, login } from './auth.services';
import { TLoginValues } from './auth.types';

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TLoginValues) => login(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['login'] });
      message.success('Успешно');
    },
    onError: () => {
      message.error('Телефон номер или пароль неверный');
    },
  });
};

const useGetMeQuery = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: getMe,
    queryKey: ['get-me'],
  });

export { useGetMeQuery, useLoginMutation };
