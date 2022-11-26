import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '@components/abstracts/ButtonBase';
import TypographyBase from '@components/abstracts/TypographyBase';

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
        ${isDisabled ? 'button-disabled' : ''}
        ${addedClassNames}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <TypographyBase className="font-bold text-sm">{innerText}</TypographyBase>
    </ButtonBase>
  );
};

BasicButton.propTypes = {
  onClick: PropTypes.func,
  innerText: PropTypes.string,
  addedClassNames: PropTypes.string,
  isActive: PropTypes.boolean,
  isDisabled: PropTypes.boolean,
};

export default BasicButton;
