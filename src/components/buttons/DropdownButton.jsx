import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ListBoxButton from '@components/buttons/ListBoxButton';
import TypographyBase from '@components/abstracts/TypographyBase';

const DropdownButton = ({
  className,
  optionMap,
  selectCallback,
  selectedOption,
  inlineDropdown = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = index => {
    selectCallback(index, optionMap);
    setIsOpen(false);
  };

  return (
    <div className={inlineDropdown ? 'inline-dropdown' : 'embedded-dropdown'}>
      <ListBoxButton
        className={className}
        onClick={handleOpenDropdown}
        innerText={selectedOption.period}
        inlineDropdown={inlineDropdown}
      />
      {isOpen && (
        <ul className="dropdown-list">
          {optionMap &&
            optionMap.map((item, index) => {
              return (
                <li
                  key={item.period}
                  onClick={() => handleSelect(index)}
                  role="option"
                  className={`cursor-pointer ${
                    selectedOption.period === item.period ? 'text-green' : ''
                  }`}
                >
                  <TypographyBase className="text-xs">{item.period}</TypographyBase>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

DropdownButton.propTypes = {
  className: PropTypes.string,
  optionMap: PropTypes.array,
  selectCallback: PropTypes.func,
  selectedOption: PropTypes.object,
  inlineDropdown: PropTypes.bool,
};

export default DropdownButton;
