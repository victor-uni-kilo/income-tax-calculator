import React, { useState, useContext } from 'react';

import Subtitle from '@components/typography/Subtitle';
import DropdownButton from '@components/buttons/DropdownButton';

import { CalculatorContext } from '../../App';
import { PAYMENT_FREQUENCY_MAP } from 'constants';
import { localeFormatter } from '../../utils/formatter';

const AmountInput = React.forwardRef((props, ref) => {
  const [amount, setAmount] = useState('');
  const { frequencyInputState } = useContext(CalculatorContext);
  const [frequencyInput, setFrequencyInput] = frequencyInputState;

  const handleOnChange = event => {
    console.log('pre', event.target.value);

    const cleanString = event.target.value.replace(/,/g, '');
    console.log('post', cleanString);
    setAmount(cleanString);
  };

  const selectCallback = (index, optionMap) => {
    setFrequencyInput(optionMap[index]);
  };

  //maskingINPUT
  return (
    <div className="mb-6">
      <Subtitle>What is your total income?</Subtitle>

      <label htmlFor="income" className="sr-only">
        What is your total income?
      </label>
      <div className="relative h-8 mt-1 rounded-md">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span>$</span>
        </div>
        <input
          type="number"
          name="income"
          id="income"
          onChange={handleOnChange}
          ref={ref}
          value={amount && localeFormatter.format(amount)}
          className="block w-full h-8 border-1 border-gray pl-7 pr-12 rounded-md bg-transparent appearance-nonefocus:border-3 focus:border-light-green focus:ring-light-green focus:ring-1 placeholder:text-light-gray"
          placeholder="eg 12,000"
        />
        <DropdownButton
          optionMap={PAYMENT_FREQUENCY_MAP}
          selectedOption={frequencyInput}
          selectCallback={selectCallback}
        />
      </div>
    </div>
  );
});

AmountInput.displayName = 'AmountInput';

export default AmountInput;
