import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="shadow-md py-5 px-32 flex items-center justify-around">
      <h1 className="font-semibold text-2xl">SellWise Group</h1>
      <h1 className="font-semibold text-2xl">
        Mashriq Mashali <span className="text-red-500 font-bold text-[18px]">(Live)</span>{' '}
      </h1>
    </header>
  );
};

export { Header };
