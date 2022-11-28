import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TypographyBase from '@components/abstracts/TypographyBase';
import ButtonBase from '@components/abstracts/ButtonBase';
import IncomeTable from '@components/IncomeTable';
import ResultTag from '@components/ResultTag';
import BasicButton from '@components/buttons/BasicButton';
import DropdownButton from '@components/buttons/DropdownButton';

import { CalculatorContext } from '../App';
import { PAYMENT_FREQUENCY_MAP } from 'constants';

const IncomeResults = () => {
  const { incomeDataState, frequencyInputState } = React.useContext(CalculatorContext);
  const [incomeData] = incomeDataState;
  const [frequencyInput, setFrequencyInput] = frequencyInputState;

  const [selectedOption, setSelectedOption] = useState(frequencyInput);

  const selectCallback = (index, optionMap) => {
    setSelectedOption(optionMap[index]);
  };

  return (
    <div>
      <section className="mb-4 p-6 rounded-md bg-light-green">
        {/* make this into a whole */}
        <div className="flex items-center mb-6">
          <ResultTag result={incomeData} filter={selectedOption} />
          <TypographyBase className="flex flex-xy-center font-bold text-md">
            yout net &nbsp;
            <DropdownButton
              optionMap={PAYMENT_FREQUENCY_MAP}
              selectedOption={selectedOption}
              selectCallback={selectCallback}
              className="inline-dropdown"
              inlineDropdown={true}
            />
            &nbsp; - income
          </TypographyBase>
        </div>
        {/* make this into a whole */}
        <IncomeTable incomeData={incomeData} />
      </section>

      <section className="flex grow justify-between items-center p-6 rounded-md bg-light-yellow border-r-2 border-dark-yellow">
        <div className="grow-0">Image</div>
        <TypographyBase element="h2" className="text-md">
          Compare lenders and get your finance
        </TypographyBase>
        <BasicButton innerText="Apply now" addedClassNames="button-green w-auto" />
      </section>
    </div>
  );
};

IncomeResults.propTypes = {
  incomeData: PropTypes.array,
};

export default IncomeResults;
