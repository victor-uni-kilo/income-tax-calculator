import React from 'react';
import PropTypes from 'prop-types';

import { formatter } from '../utils/formatter';

const IncomeTable = ({ incomeData }) => {
  return (
    <div id="income-table" className="w-full px-2 rounded-sm bg-white">
      <table className="w-full table-auto text-left text-base">
        <thead>
          <tr className="border-b-2 border-gray">
            <th>Frequency</th>
            <th>Gross Income</th>
            <th>Tax</th>
            <th>Net Income</th>
          </tr>
        </thead>
        <tbody>
          {incomeData &&
            incomeData.map((item, index) => {
              return (
                <tr key={`row-${index}`} className="border-b border-gray last:border-none">
                  <td>{item.period}</td>
                  <td>{formatter.format(item.gross)}</td>
                  <td>{formatter.format(item.tax)}</td>
                  <td>{formatter.format(item.net)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

IncomeTable.propTypes = {
  incomeData: PropTypes.array,
};

export default IncomeTable;
