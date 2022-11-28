import React, { useState } from 'react';

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
  console.log('selectedOption', selectedOption);
  const handleSelect = index => {
    selectCallback(index, optionMap);
    setIsOpen(false);
  };

  console.log('inlineDropdown', inlineDropdown);
  return (
    <div className={inlineDropdown ? 'inline-dropdown' : 'embedded-dropdown'}>
      <ListBoxButton
        className={className}
        onClick={handleOpenDropdown}
        innerText={selectedOption.period}
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

export default DropdownButton;
