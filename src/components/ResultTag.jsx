import React from 'react';
import PropTypes from 'prop-types';

import TypographyBase from './abstracts/TypographyBase';
import { formatter } from '../utils/formatter';

const ResultTag = ({ result, filter }) => {
  const displayResult = result.find(item => item.period === filter.period);
  console.log('result', result);
  console.log('filter', filter);
  console.log('displayResult', displayResult);
  return (
    <div className="panel-result">
      <TypographyBase element="h2" className="font-bold text-lg">
        {result && formatter.format(displayResult.net)}
      </TypographyBase>
    </div>
  );
};

ResultTag.propTypes = {
  result: PropTypes.array,
};

export default ResultTag;
