import React, { useRef, useState } from 'react';

import AmountInput from './input/AmountInput';
import BasicButton from '@components/buttons/BasicButton';
import TypographyBase from './markups/TypographyBase';

import { IncomeTypeEnum } from '@constants';

const IncomeDetails = ({ amountType, handleCalculateTax, handleTypeToggle }) => {
  const amountInputRef = useRef(null);

  return (
    <div className="w-1/2">
      <AmountInput ref={amountInputRef} />
      <div>
        <TypographyBase element="h2" className="subtitle">
          Please choose the income type
        </TypographyBase>
        <div className="flex gap-3 mb-6">
          {IncomeTypeEnum &&
            Object.keys(IncomeTypeEnum).map(type => {
              return (
                <BasicButton
                  key={type}
                  onClick={() => handleTypeToggle(type)}
                  innerText={IncomeTypeEnum[type]}
                  isActive={amountType === type}
                />
              );
            })}
        </div>
        <div>
          <BasicButton
            onClick={() => handleCalculateTax(amountInputRef)}
            innerText="Calculate &rarr;"
            isDisabled={amountType === null}
          />
        </div>
      </div>
    </div>
  );
};

export default IncomeDetails;
