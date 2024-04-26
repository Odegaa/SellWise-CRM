import { api } from 'src/api';

import { TPostDavomat, TResponseDavomat } from './davomat.types';

const axiosGetDavomat = async (id: number): Promise<TResponseDavomat> => {
  const response = await api.get(`lessons/${id}/students`);
  return response.data;
};

const axiosPostDavomat = async (id: number, values: TPostDavomat): Promise<void> => {
  const response = await api.post(`davomat/${id}/students`, values);
  return response.data;
};

export { axiosGetDavomat, axiosPostDavomat };
