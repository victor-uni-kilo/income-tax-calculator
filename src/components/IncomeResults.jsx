import React from 'react';
import PropTypes from 'prop-types';

import TypographyBase from './abstracts/TypographyBase';
import IncomeTable from '@components/IncomeTable';
import ResultTag from '@components/ResultTag';
import BasicButton from './buttons/BasicButton';

import { CalculatorContext } from '../App';

const IncomeResults = () => {
  const { incomeDataState } = React.useContext(CalculatorContext);
  const [incomeData] = incomeDataState;

  return (
    <div>
      <section className="mb-4 p-6 rounded-md bg-light-green">
        {/* make this into a whole */}
        <div className="flex items-center mb-6">
          <ResultTag result={incomeData[0].net} />
          <TypographyBase className="font-bold text-md">{`your net $monthly - income`}</TypographyBase>
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
  incomeData: PropTypes.object,
};

export default IncomeResults;
