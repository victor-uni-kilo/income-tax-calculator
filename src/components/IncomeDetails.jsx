import React, { useRef, useState } from 'react';

import BasicButton from '@components/buttons/BasicButton';
import Subtitle from '@components/typography/Subtitle';
import AmountInput from './input/AmountInput';

import { IncomeTypeEnum, PAYMENT_FREQUENCY_MAP } from '@constants';
import { deriveTaxFromGross, deriveTaxFromNet, buildIncomeData } from '@utils/calculators';
import { CalculatorContext } from '../App';

const IncomeDetails = () => {
  const { incomeDataState, currentTabState, frequencyInputState } =
    React.useContext(CalculatorContext);
  const [, setIncomeData] = incomeDataState;
  const [, setCurrentTab] = currentTabState;
  const [frequencyInput] = frequencyInputState;

  const amountInputRef = useRef(null);
  const [amountType, setAmountType] = useState(null);
  const isActive = amountType !== null;

  const handleTypeToggle = type => {
    setAmountType(type);
  };

  const handleCalculateTax = (inputAmountRef, frequencyInput) => {
    const incomeAmount = parseInt(inputAmountRef.current.value) * frequencyInput.numberOfPayments;
    if (incomeAmount) {
      const isGross = amountType === 'GROSS';
      const annualFigures = {};
      annualFigures.tax = isGross
        ? deriveTaxFromGross(incomeAmount)
        : deriveTaxFromNet(incomeAmount);
      annualFigures.gross = isGross ? incomeAmount : incomeAmount + annualFigures.tax;
      annualFigures.net = isGross ? incomeAmount - annualFigures.tax : incomeAmount;

      setIncomeData(buildIncomeData(annualFigures, PAYMENT_FREQUENCY_MAP));
      setCurrentTab(1);
    } else {
      alert('Please input income amount.');
    }
  };

  console.log('amountType', amountType);
  return (
    <div className="w-1/2">
      <section>
        <AmountInput ref={amountInputRef} />
        <div>
          <Subtitle>Please choose the income type</Subtitle>
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
              onClick={() => handleCalculateTax(amountInputRef, frequencyInput)}
              innerText="Calculate &rarr;"
              isActive={isActive}
              isDisabled={!isActive}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IncomeDetails;
