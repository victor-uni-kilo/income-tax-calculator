import React from 'react';

import ButtonBase from '@components/markups/ButtonBase';
import TypographyBase from '@components/markups/TypographyBase';

const TabButton = ({ onClick, innerText, isCurrent, isDisabled = false }) => {
  return (
    <ButtonBase className={`tab-button ${isCurrent}`} onClick={onClick} disabled={isDisabled}>
      <TypographyBase className="vertical-text">{innerText}</TypographyBase>
    </ButtonBase>
  );
};

export default TabButton;
