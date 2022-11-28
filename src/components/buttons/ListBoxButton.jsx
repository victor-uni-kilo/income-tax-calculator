import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '@components/abstracts/ButtonBase';
import TypographyBase from '@components/abstracts/TypographyBase';

const ListBoxButton = ({ className, onClick, innerText }) => {
  return (
    <ButtonBase className={className} onClick={onClick} role="listbox">
      <TypographyBase>{innerText}</TypographyBase>
    </ButtonBase>
  );
};

ListBoxButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  innerText: PropTypes.string,
};

export default ListBoxButton;
