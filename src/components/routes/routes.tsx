import { Home, Login, NotFound } from '..';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/*', element: <NotFound /> },
];
