export type TTeachers = {
  id: number;
  name: string;
  phone: string;
  created_at: string;
  updated_at: string;
};

export type TTeacher = {
  data: TTeacherData;
};

export type TTeacherData = {
  id: number;
  name: string;
  phone: string;
  created_at: string;
  updated_at: string;
};

export type TChangeTeacher = {
  id?: number;
  name: string;
  email?: string;
  password?: string;
  phone: string;
};
