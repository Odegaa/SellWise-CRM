export type TStudents = {
  id: number;
  name: string;
  phone: string;
  course: TStudentCourses;
  created_at: string;
  updated_at: string;
};

export type TStudentCourses = {
  id: number;
  teacher: TStudentTeacher;
  name: string;
  duration: number;
  price: number;
  days: string;
  count_student: number;
  created_at: string;
  updated_at: string;
};

export type TStudentTeacher = {
  id: number;
  name: string;
};

export type TChangeStudent = {
  id?: number;
  name: string;
  phone: string;
  course_id?: number;
};
