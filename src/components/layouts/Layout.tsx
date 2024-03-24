import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStorageStore } from 'src/store';

import { Aside } from './aside';
import { Header } from './header';

const Layout: React.FC = () => {
  const { token } = useAuthStorageStore();

  return token ? (
    <main className="min-h-screen w-full">
      <Header />
      <Aside />
      <div className="sm:ml-72 p-5">
        <Outlet />
      </div>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export { Layout };
