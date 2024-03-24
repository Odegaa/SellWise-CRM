export type TCourse = {
  id: number;
  teacher: TCourseTeacher;
  name: string;
  duration: number;
  price: number;
  count_student: number;
  created_at: string;
  updated_at: string;
};

export type TCourseTeacher = {
  id: number;
  name: string;
};

export type TCourseData = {
  success: true;
  data: TCourse;
};

export type TChangeCourse = {
  id?: number;
  user_id: number;
  name: string;
  duration: number;
  price: number;
  count_student: number;
};
