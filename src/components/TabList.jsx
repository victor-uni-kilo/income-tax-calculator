import React from 'react';
import ButtonBase from '@components/markups/ButtonBase';
import TypographyBase from '@components/markups/TypographyBase';

const TabList = () => {
  return (
    <div className="flex flex-col text-sm font-medium text-center text-gray-500">
      <ButtonBase className="tab-button">
        <TypographyBase className="vertical-text">Income Details</TypographyBase>
      </ButtonBase>
      <ButtonBase className="tab-button">
        <TypographyBase className="vertical-text">Income</TypographyBase>
      </ButtonBase>
    </div>
  );
};

export default TabList;
