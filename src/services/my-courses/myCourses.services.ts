import { api } from 'src/api';

import { TTeacherMyCourses, TTeacherMyCoursesDetails } from './myCourses.types';

const axiosGetMyCourses = async (): Promise<TTeacherMyCourses> => {
  const response = await api.get('/teacher/courses');
  return response.data;
};

const axiosGetMyCourseById = async (id: number): Promise<TTeacherMyCoursesDetails> => {
  const response = await api.get(`/teacher/courses/${id}`);
  return response.data;
};

export { axiosGetMyCourseById, axiosGetMyCourses };
