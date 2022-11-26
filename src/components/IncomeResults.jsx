import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from './markups/ButtonBase';
import TypographyBase from './markups/TypographyBase';
import IncomeTable from '@components/IncomeTable';

import { formatter } from '../utils/formatter';
import BasicButton from './buttons/BasicButton';

const IncomeResults = ({ incomeData }) => {
  return (
    <div>
      <section className="mb-4 p-6 rounded-md bg-light-green">
        <div className="flex items-center mb-6">
          <div className="panel-result">
            <TypographyBase element="h2" className="font-bold text-lg">
              {incomeData && formatter.format(incomeData[0].net)}
            </TypographyBase>
          </div>
          <div>
            <TypographyBase className="font-bold text-md">{`your net $monthly - income`}</TypographyBase>
          </div>
        </div>
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
  annualFigures: PropTypes.object,
};

export default IncomeResults;
