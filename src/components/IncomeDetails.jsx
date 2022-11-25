import React from 'react';

import InputAmount from './input/InputAmount';
import ButtonBase from './markups/ButtonBase';
import TypographyBase from './markups/TypographyBase';

const IncomeDetails = () => {
  return (
    <div className="w-1/2">
      <InputAmount />
      <div>
        <TypographyBase element="h2" className="subtitle">
          Please choose the income type
        </TypographyBase>
        <div className="flex gap-3">
          <ButtonBase className="button-basic w-full">
            <TypographyBase className="font-bold text-sm active">Gross Income</TypographyBase>
          </ButtonBase>
          <ButtonBase className="button-basic w-full">
            <TypographyBase className="font-bold text-sm">Net Income</TypographyBase>
          </ButtonBase>
        </div>
        <div>
          <ButtonBase className="button-basic w-full">
            <TypographyBase className="font-bold text-sm">Calculate &rarr;</TypographyBase>
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default IncomeDetails;
