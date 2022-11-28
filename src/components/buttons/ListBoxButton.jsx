import React from 'react';
import PropTypes from 'prop-types';
import arrow from '../../svg/arrow.svg';


import ButtonBase from '@components/abstracts/ButtonBase';
import TypographyBase from '@components/abstracts/TypographyBase';


const ListBoxButton = ({ className, onClick, innerText, inlineDropdown }) => {
  return (
    <ButtonBase
      className={`flex w-full flex-xy-center px-2 ${className}`}
      onClick={onClick}
      role="listbox"
    >
      <TypographyBase className={!inlineDropdown ? 'text-dark-gray' : ''}>
        {innerText}
      </TypographyBase>
      {!inlineDropdown && (
        <div className="w-auto h-2 pl-1">
          <img className="w-full h-full object-cover" src={arrow} alt="arrow-icon" />
        </div>
      )}
    </ButtonBase>
  );
};

ListBoxButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  innerText: PropTypes.string,
  inlineDropdown: PropTypes.bool,
};

export default ListBoxButton;
