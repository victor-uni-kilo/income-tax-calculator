import React from 'react';
import PropTypes from 'prop-types';

import TypographyBase from '../abstracts/TypographyBase';

const Subtitle = ({ children }) => {
  return (
    <TypographyBase element="h2" className="subtitle">
      {children}
    </TypographyBase>
  );
};

Subtitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Subtitle;
