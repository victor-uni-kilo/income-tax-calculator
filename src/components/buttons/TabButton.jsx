import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '@components/abstracts/ButtonBase';
import TypographyBase from '@components/abstracts/TypographyBase';

const TabButton = ({ onClick, innerText, isCurrent, isDisabled = false }) => {
  return (
    <ButtonBase
      className={`tab-button ${isCurrent ? 'tab-button-active' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <TypographyBase className="vertical-text">{innerText}</TypographyBase>
    </ButtonBase>
  );
};
//FEJLOVALI SU TIPOVI
TabButton.propTypes = {
  onClick: PropTypes.func,
  innerText: PropTypes.string,
  isCurrent: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export default TabButton;
