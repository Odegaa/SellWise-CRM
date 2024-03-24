import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout, Login } from '..';

import { routes } from './routes';

const Router: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Layout />}>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Route>
  </Routes>
);

export { Router };
