import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { FloatButton } from 'antd';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa6';

const Layout: React.FC = () => {
  const btnStatus = true;

  const toggleButton = () => {
    return !btnStatus;
  };

  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
      <div className="absolute ">
        <FloatButton onClick={toggleButton} icon={btnStatus === true ? <FaMoon /> : <FaSun />} />
      </div>
    </main>
  );
};

export { Layout };
