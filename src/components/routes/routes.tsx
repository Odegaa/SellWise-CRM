// eslint-disable-next-line object-curly-newline
import {
  Courses,
  Davomat,
  Details,
  Home,
  MyCourses,
  NotFoundPage,
  Payments,
  Students,
  Teachers,
} from '..';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/courses', element: <Courses /> },
  { path: '/courses/:id', element: <Payments /> },
  { path: '/teachers', element: <Teachers /> },
  { path: '/students', element: <Students /> },
  { path: '/my-courses', element: <MyCourses /> },
  { path: '/my-courses/:id', element: <Details /> },
  { path: '/my-courses/:id/:lessonId', element: <Davomat /> },

  { path: '/*', element: <NotFoundPage /> },
];
