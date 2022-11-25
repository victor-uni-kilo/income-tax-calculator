import React from 'react';
import PropTypes from 'prop-types';

const ButtonBase = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

ButtonBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ButtonBase;
