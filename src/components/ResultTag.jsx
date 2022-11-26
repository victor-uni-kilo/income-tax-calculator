import React from 'react';
import PropTypes from 'prop-types';

import TypographyBase from './abstracts/TypographyBase';
import { formatter } from '../utils/formatter';

const ResultTag = ({ result }) => {
  return (
    <div className="panel-result">
      <TypographyBase element="h2" className="font-bold text-lg">
        {result && formatter.format(result)}
      </TypographyBase>
    </div>
  );
};

ResultTag.propTypes = {
  result: PropTypes.number,
};

export default ResultTag;
