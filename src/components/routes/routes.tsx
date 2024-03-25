// eslint-disable-next-line object-curly-newline
import { Courses, Home, MyCourses, NotFoundPage, Students, Teachers } from '..';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/courses', element: <Courses /> },
  { path: '/teachers', element: <Teachers /> },
  { path: '/students', element: <Students /> },
  { path: '/my-courses', element: <MyCourses /> },

  { path: '/*', element: <NotFoundPage /> },
];
