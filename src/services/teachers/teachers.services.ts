import { api } from 'src/api';

import { TResponse } from '../index.types';

// eslint-disable-next-line object-curly-newline
import { TChangeTeacher, TTeacher, TTeachers } from './teachers.types';

const axiosGetTeachers = async (page: number): Promise<TResponse<TTeachers>> => {
  const response = await api.get('teachers', { params: { page } });
  return response.data;
};

const axiosGetTeacherById = async (id: number): Promise<TResponse<TTeacher>> => {
  const response = await api.get(`teachers/${id}`);
  return response.data;
};

const axiosCreateTeacher = async (values: TChangeTeacher): Promise<void> => {
  const response = await api.post('teachers', values);
  return response.data;
};

const axiosUpdateTeacher = async (values: TChangeTeacher): Promise<void> => {
  const response = await api.put(`teachers/${values.id}`, values);
  return response.data;
};

const axiosDeleteTeacher = async (id: number): Promise<void> => {
  const response = await api.delete(`teachers/${id}`);
  return response.data;
};

export {
  axiosCreateTeacher,
  axiosDeleteTeacher,
  axiosGetTeacherById,
  axiosGetTeachers,
  axiosUpdateTeacher,
};
