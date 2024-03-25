import { FaUser } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { PiStudentFill } from 'react-icons/pi';

export const link = [
  { path: '/teachers', name: 'Учителя', icon: <FaUser /> },
  { path: '/courses', name: 'Курсы', icon: <ImBooks /> },
  { path: '/students', name: 'Студенты', icon: <PiStudentFill /> },
];

export const teacherLink = [{ path: '/my-courses', name: 'Мои Курсы', icon: <ImBooks /> }];
