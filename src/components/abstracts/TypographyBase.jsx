import React from 'react';
import PropTypes from 'prop-types';

const TypographyBase = ({ element, className, children }) => {
  const Component = element || 'span';
  return <Component className={className}>{children}</Component>;
};

TypographyBase.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default TypographyBase;
