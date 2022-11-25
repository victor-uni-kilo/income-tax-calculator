import React, { useState } from 'react';
import ButtonBase from '@components/markups/ButtonBase';
import TypographyBase from '@components/markups/TypographyBase';

const TabList = ({ tabs, handleTabClick, currentTab }) => {
  return (
    <div className="flex flex-col text-sm font-medium text-center text-gray-500">
      {tabs &&
        tabs.map((item, index) => {
          const isCurrent = index === currentTab ? 'tab-button-active' : '';
          return (
            <ButtonBase
              key={`tab-${index}`}
              className={`tab-button ${isCurrent}`}
              onClick={() => handleTabClick(index)}
            >
              <TypographyBase className="vertical-text">{item.text}</TypographyBase>
            </ButtonBase>
          );
        })}
    </div>
  );
};

export default TabList;
