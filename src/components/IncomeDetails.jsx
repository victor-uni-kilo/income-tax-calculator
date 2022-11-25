import React, { useRef, useState } from 'react';

import AmountInput from './input/AmountInput';
import ButtonBase from './markups/ButtonBase';
import TypographyBase from './markups/TypographyBase';

import { INCOME_TYPE_ENUM } from '@constants';

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
          {INCOME_TYPE_ENUM &&
            Object.keys(INCOME_TYPE_ENUM).map(type => {
              const isActive = amountType === type ? 'button-basic-active' : '';
              return (
                <ButtonBase
                  key={type}
                  className={`button-basic w-full ${isActive}`}
                  onClick={() => handleTypeToggle(type)}
                >
                  <TypographyBase className="font-bold text-sm">
                    {INCOME_TYPE_ENUM[type]}
                  </TypographyBase>
                </ButtonBase>
              );
            })}
        </div>
        <div>
          <ButtonBase
            onClick={() => handleCalculateTax(amountInputRef)}
            className={`button-basic w-full ${
              amountType === null ? 'button-disabled' : 'button-basic-active'
            }`}
            disabled={amountType === null ? true : false}
          >
            <TypographyBase className="font-bold text-sm">Calculate &rarr;</TypographyBase>
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default IncomeDetails;
