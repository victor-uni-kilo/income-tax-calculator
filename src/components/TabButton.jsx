import React from 'react';
import PropTypes from 'prop-types';

const TabButton = ({ text }) => {
  return (
    <button className="flex _flex-xy-center h-48 w-10 p-4 font-bold text-base rounded-l-lg shadow-md">
      {text && <span className="_vertical-rl -rotate-180">{text}</span>}
    </button>
  );
};

TabButton.propTypes = {
  text: PropTypes.string,
};

export default TabButton;
