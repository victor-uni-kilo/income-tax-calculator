import React from 'react';

import InputAmount from './input/InputAmount';
import ButtonBase from './markups/ButtonBase';
import TypographyBase from './markups/TypographyBase';

const Card = () => {
  return (
    <>
      <div>
        <InputAmount />
        <TypographyBase element="h2" className="subtitle">
          Please choose the income type
        </TypographyBase>
        <div className="flex gap-3">
          <ButtonBase className="basic-button">
            <TypographyBase className="font-bold text-sm">Gross Income</TypographyBase>
          </ButtonBase>
          <ButtonBase className="basic-button">
            <TypographyBase className="font-bold text-sm">Net Income</TypographyBase>
          </ButtonBase>
        </div>
        <div>
          <ButtonBase className="basic-button">
            <TypographyBase className="font-bold text-sm">Calculate &rarr;</TypographyBase>
          </ButtonBase>
        </div>
      </div>
    </>
  );
};

export default Card;
