import React from 'react';

import ButtonBase from '@components/markups/ButtonBase';
import TypographyBase from '@components/markups/TypographyBase';

const BasicButton = ({
  onClick,
  innerText,
  addedClassNames = '',
  isActive = false,
  isDisabled = false,
}) => {
  return (
    <ButtonBase
      className={`button-basic w-full 
        ${isActive ? 'button-basic-active' : ''} 
        ${isDisabled ? 'button-disabled' : 'button-basic-active'}
        ${addedClassNames}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <TypographyBase className="font-bold text-sm">{innerText}</TypographyBase>
    </ButtonBase>
  );
};

export default BasicButton;
