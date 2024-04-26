export type TTeacherMyCourses = {
  data: TTeacherMyCoursesData[];
};

export type TTeacherMyCoursesDetails = {
  data: TTeacherMyCoursesData;
};

export type TTeacherMyCoursesData = {
  id: number;
  name: string;
  duration: number;
  price: number;
  count_student: number;
  start: string;
  days: string;
  time: string;
  created_at: string;
  updated_at: string;
};
