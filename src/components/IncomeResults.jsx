import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import TypographyBase from '@components/abstracts/TypographyBase';
import IncomeTable from '@components/IncomeTable';
import ResultTag from '@components/ResultTag';
import BasicButton from '@components/buttons/BasicButton';
import DropdownButton from '@components/buttons/DropdownButton';

import illustration from '../svg/columns.svg';
import { CalculatorContext } from '../App';
import { PAYMENT_FREQUENCY_MAP } from 'constants';

const IncomeResults = () => {
  const { incomeDataState, frequencyInputState } = useContext(CalculatorContext);
  const [incomeData] = incomeDataState;
  const [frequencyInput] = frequencyInputState;

  const [selectedOption, setSelectedOption] = useState(frequencyInput);

  const selectCallback = (index, optionMap) => {
    setSelectedOption(optionMap[index]);
  };

  return (
    <>
      <section className="mb-4 p-6 rounded-md bg-light-green">
        {/* make this into a whole */}
        <div className="flex items-center mb-6">
          <ResultTag result={incomeData} filter={selectedOption} />
          <TypographyBase className="flex flex-xy-center font-bold text-md">
            your net
            <DropdownButton
              optionMap={PAYMENT_FREQUENCY_MAP}
              selectedOption={selectedOption}
              selectCallback={selectCallback}
              className="inline-dropdown"
              inlineDropdown={true}
            />
            - income
          </TypographyBase>
        </div>
        {/* make this into a whole */}
        <IncomeTable incomeData={incomeData} />
      </section>

      <section className="flex justify-between h-32 items-center p-6 rounded-md bg-light-yellow border-r-2 border-dark-yellow">
        <div className="w-auto h-16 pl-1">
          <img className="w-full h-full object-cover" src={illustration} alt="arrow-icon" />
        </div>
        <TypographyBase element="h2" className="text-md">
          Compare lenders and get your finance
        </TypographyBase>
        <BasicButton innerText="Apply now" addedClassNames="button-green w-auto" />
      </section>
    </>
  );
};

IncomeResults.propTypes = {
  incomeData: PropTypes.array,
};

export default IncomeResults;
