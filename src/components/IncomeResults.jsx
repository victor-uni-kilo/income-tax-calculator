import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from './markups/ButtonBase';
import TypographyBase from './markups/TypographyBase';
import IncomeTable from '@components/IncomeTable';

const IncomeResults = ({ result }) => {
  return (
    <div>
      <section className="mb-4 p-6 rounded-md bg-light-green">
        <div className="flex items-center mb-6">
          <div className="panel-result">
            <TypographyBase element="h2" className="font-bold text-lg">
              {`$${result}`}
            </TypographyBase>
          </div>
          <div>
            <TypographyBase className="font-bold text-md">{`your net $monthly - income`}</TypographyBase>
          </div>
        </div>
        <IncomeTable />
      </section>

      <section className="flex grow justify-between items-center p-6 rounded-md bg-light-yellow border-r-2 border-dark-yellow">
        <div className="grow-0">Image</div>
        <TypographyBase element="h2" className="text-md">
          Compare lenders and get your finance
        </TypographyBase>
        <ButtonBase className="button-basic button-green w-auto">
          <TypographyBase className="font-bold text-sm">Apply now</TypographyBase>
        </ButtonBase>
      </section>
    </div>
  );
};

IncomeResults.propTypes = {
  result: PropTypes.number,
};

export default IncomeResults;
