/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const CustomButton: React.FC<{ toggleModal: () => void }> = ({ toggleModal }) => (
  <button
    onClick={toggleModal}
    className="p-2 rounded-lg text-white bg-slate-500 transition-colors hover:bg-slate-600"
  >
    <FaPlus />
  </button>
);

export { CustomButton };
