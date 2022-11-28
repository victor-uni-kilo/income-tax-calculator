import React from 'react';

import calculatorIcon from '../svg/calculatorIcon.svg';

const Header = () => {
  return (
    <div className="flex items-end mb-6">
      <div className="w-12 pl-1">
        <img className="w-full h-full object-cover" src={calculatorIcon} alt="calculator-icon" />
      </div>
      <h1 className="ml-2 text-lg font-bold">Income Tax Calculator</h1>
    </div>
  );
};

export default Header;
