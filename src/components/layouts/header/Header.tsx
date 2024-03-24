/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useBarsStore } from 'src/store';

import { CustomDrawer } from './drawer/CustomDrawer';

const Header: React.FC = () => {
  const { toggleOpen } = useBarsStore();

  const handleClick = () => {
    toggleOpen();
  };

  return (
    <header className="block sm:hidden w-full bg-slate-700 text-white p-5">
      <button onClick={handleClick}>
        <FaBars className="text-lg" />
      </button>
      <CustomDrawer />
    </header>
  );
};

export { Header };
