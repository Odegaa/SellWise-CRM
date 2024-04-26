import { api } from 'src/api';

import { TPayments } from './payments.types';

const axiosGetPayments = async (id: number): Promise<TPayments> => {
  const response = await api.get(`/courses/${id}/payments`);
  return response.data;
};

export { axiosGetPayments };
