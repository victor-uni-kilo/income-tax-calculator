import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '@components/abstracts/ButtonBase';
import TypographyBase from '@components/abstracts/TypographyBase';

const TabButton = ({ onClick, innerText, isCurrent, isDisabled = false }) => {
  return (
    <ButtonBase className={`tab-button ${isCurrent}`} onClick={onClick} disabled={isDisabled}>
      <TypographyBase className="vertical-text">{innerText}</TypographyBase>
    </ButtonBase>
  );
};

TabButton.propTypes = {
  onClick: PropTypes.func,
  innerText: PropTypes.string,
  isCurrent: PropTypes.boolean,
  isDisabled: PropTypes.boolean,
};

export default TabButton;
