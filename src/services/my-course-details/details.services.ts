/* eslint-disable object-curly-newline */
import { api } from 'src/api';

import { TResponse } from '../index.types';

import { TChangeDetails, TDetails } from './details.types';

const axiosGetDetails = async (lessonId: number, page: number): Promise<TResponse<TDetails>> => {
  const response = await api.get(`/teacher/courses/${lessonId}/lessons`, { params: { page } });
  return response.data;
};

const axiosCreateDetail = async (lessonId: number, values: TChangeDetails): Promise<void> => {
  const response = await api.post(`/teacher/courses/${lessonId}/lessons`, values);
  return response.data;
};

const axiosUpdateDetail = async (lessonId: number, values: TChangeDetails): Promise<void> => {
  const response = await api.post(`/teacher/courses/${lessonId}/lessons/${values.id}`, values);
  return response.data;
};

const axiosDeleteDetail = async (lessonId: number, id: number): Promise<void> => {
  const response = await api.post(`/teacher/courses/${lessonId}/lessons/${id}`);
  return response.data;
};

export { axiosCreateDetail, axiosDeleteDetail, axiosGetDetails, axiosUpdateDetail };
