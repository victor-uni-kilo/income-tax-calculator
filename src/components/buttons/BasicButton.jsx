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
      className={`button-basic w-full ${addedClassNames} ${isActive ? 'button-basic-active' : ''} ${
        isDisabled ? 'button-disabled' : ''
      } `}
      onClick={onClick}
      disabled={isDisabled}
    >
      <TypographyBase>{innerText}</TypographyBase>
    </ButtonBase>
  );
};

BasicButton.propTypes = {
  onClick: PropTypes.func,
  innerText: PropTypes.string,
  addedClassNames: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export default BasicButton;
