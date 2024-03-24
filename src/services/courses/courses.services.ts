import { api } from 'src/api';

import { TResponse } from '../index.types';

import { TChangeCourse, TCourse, TCourseData } from './courses.types';

const axiosGetCourses = async (): Promise<TResponse<TCourse>> => {
  const response = await api.get('courses');
  return response.data;
};

const axiosGetCourseById = async (id: number): Promise<TCourseData> => {
  const response = await api.get(`courses/${id}`);
  return response.data;
};

const axiosCreateCourse = async (values: TChangeCourse): Promise<void> => {
  const response = await api.post('courses', values);
  return response.data;
};

const axiosUpdateCourse = async (values: TChangeCourse): Promise<void> => {
  const response = await api.put(`courses/${values.id}`, values);
  return response.data;
};

const axiosDeleteCourse = async (id: number): Promise<void> => {
  const response = await api.delete(`courses/${id}`);
  return response.data;
};

export {
  axiosCreateCourse,
  axiosDeleteCourse,
  axiosGetCourseById,
  axiosGetCourses,
  axiosUpdateCourse,
};
