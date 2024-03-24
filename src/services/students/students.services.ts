import { api } from 'src/api';

import { TResponse } from '../index.types';

import { TChangeStudent, TStudents } from './students.types';

const axiosGetStudents = async (page: number): Promise<TResponse<TStudents>> => {
  const response = await api.get('students', { params: { page } });
  return response.data;
};

const axiosGetStudentById = async (id: number): Promise<TStudents> => {
  const response = await api.get(`students/${id}`);
  return response.data;
};

const axiosCreateStudent = async (values: TChangeStudent): Promise<void> => {
  const response = await api.post('students', values);
  return response.data;
};

const axiosUpdateStudent = async (values: TChangeStudent): Promise<void> => {
  const response = await api.put(`students/${values.id}`, values);
  return response.data;
};

const axiosDeleteStudent = async (id: number): Promise<void> => {
  const response = await api.delete(`students/${id}`);
  return response.data;
};

export {
  axiosCreateStudent,
  axiosDeleteStudent,
  axiosGetStudentById,
  axiosGetStudents,
  axiosUpdateStudent,
};
