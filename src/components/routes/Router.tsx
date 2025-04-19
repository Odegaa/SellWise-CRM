import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '..';
import { routes } from './routes';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} element={route.element} path={route.path} />
        ))}
      </Route>
    </Routes>
  );
};

export { Router };
