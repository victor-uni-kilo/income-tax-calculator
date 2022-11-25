import React from 'react';

const IncomeTable = () => {
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
          <tr className="border-b border-gray">
            <td>Weekly</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Forthnitely</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Monthy</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Annualy</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IncomeTable;
