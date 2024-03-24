import { api } from 'src/api';

import { TAuthResponse, TLoginValues } from './auth.types';

const login = async (values: TLoginValues): Promise<TAuthResponse> => {
  const response = await api.post('signin', values);
  return response.data;
};

export { login };
