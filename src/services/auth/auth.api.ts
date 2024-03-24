/* eslint-disable import/no-extraneous-dependencies */
import { message } from 'antd';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { login } from './auth.services';
import { TLoginValues } from './auth.types';

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TLoginValues) => login(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['login'] });
      message.success('Успешно');
    },
  });
};

export { useLoginMutation };
