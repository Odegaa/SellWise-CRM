import { api } from 'src/api';

import { TAuthResponse, TGetMe, TLoginValues } from './auth.types';

const login = async (values: TLoginValues): Promise<TAuthResponse> => {
  const response = await api.post('signin', values);
  return response.data;
};

const getMe = async (): Promise<TGetMe> => {
  const response = await api.get('getme');
  return response.data;
};

export { getMe, login };
