import React from 'react';

import Image from '@components/abstracts/Image';
import DownloadButton from '@components/buttons/DownloadButton';
import calculatorIcon from '../svg/calculatorIcon.svg';

const Header = ({ showDownloadButton }) => {
  return (
    <div className="flex items-end mb-6">
      <Image className="w-12 pl-1" src={calculatorIcon} alt="calculator-icon" />
      <h1 className="ml-2 text-lg font-bold">Income Tax Calculator</h1>
      {showDownloadButton && (
        <DownloadButton innerText="Download" addedClassNames="button-light w-auto ml-auto" />
      )}
    </div>
  );
};

export default Header;
