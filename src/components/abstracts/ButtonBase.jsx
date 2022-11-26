import React from 'react';
import PropTypes from 'prop-types';

const ButtonBase = props => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

ButtonBase.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ButtonBase;
