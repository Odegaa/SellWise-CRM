import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from 'src/assets/img/logo.png';
import { CustomConfirm } from 'src/components';
import { useAuthStorageStore } from 'src/store';

import { link } from './link';

const AsideInner: React.FC = () => {
  const navigate = useNavigate();
  const { signOut } = useAuthStorageStore();
  const logout = () => {
    signOut();
    navigate('/login');
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <h1 className="p-3 uppercase tracking-widest text-2xl flex items-center gap-2 justify-center">
          <img src={logo} alt="logo" className="max-w-20 w-full" />
          <span className="selection:bg-none">Universal ACADEMY</span>
        </h1>
        <div className="flex flex-col gap-1 py-4 px-2">
          {link.map(({ path, name, icon }) => (
            <NavLink
              to={path}
              key={path}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 aria-[current]:bg-slate-800 flex items-center gap-2"
            >
              <span>{icon}</span>
              <span>{name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="py-4 px-2 w-full">
        <CustomConfirm
          title="Выйти?"
          description="Вы точно хотите выйти?"
          okText="Да"
          cancelText="Нет"
          onConfirm={logout}
          placement="topRight"
        >
          <button className="w-full px-3 py-2 rounded-lg hover:bg-slate-800 aria-[current]:bg-slate-800 flex items-center gap-2">
            <span>
              <MdExitToApp />
            </span>
            <span>выйти</span>
          </button>
        </CustomConfirm>
      </div>
    </div>
  );
};

export { AsideInner };
