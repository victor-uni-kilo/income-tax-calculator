import React, { useState, useContext } from 'react';

import TabList from '@components/TabList';
import Header from '@components/Header';
import IncomeDetails from '@components/IncomeDetails';
import IncomeResults from '@components/IncomeResults';

import { TAB_LIST_MAP, PAYMENT_FREQUENCY_MAP } from '@constants';
import { deriveTaxFromGross, deriveTaxFromNet, buildIncomeData } from '@utils/calculators';

const App = () => {
  // UI STATES
  const [currentTab, setCurrentTab] = useState(0);
  // CALCULATION STATES
  const [amountType, setAmountType] = useState(null);
  const [incomeData, setIncomeData] = useState(null);

  const handleTabClick = index => setCurrentTab(index);

  const handleTypeToggle = type => {
    setAmountType(type);
  };

  const handleCalculateTax = inputAmountRef => {
    const incomeAmount = parseInt(inputAmountRef.current.state.amount);
    const isGross = amountType === 'gross';
    const annualFigures = {};
    annualFigures.tax = isGross ? deriveTaxFromGross(incomeAmount) : deriveTaxFromNet(incomeAmount);
    annualFigures.gross = isGross ? incomeAmount : incomeAmount + annualFigures.tax;
    annualFigures.net = isGross ? incomeAmount - annualFigures.tax : incomeAmount;

    setIncomeData(buildIncomeData(annualFigures, PAYMENT_FREQUENCY_MAP));
    setCurrentTab(1);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* <CalculatorContext.Provider value="#"> */}
      <div className="flex h-4/6 w-6/12">
        <TabList tabs={TAB_LIST_MAP} currentTab={currentTab} handleTabClick={handleTabClick} />
        <div className="bg-white-100 p-6 w-full shadow-md rounded-lg">
          <Header />
          {currentTab === 0 ? (
            <IncomeDetails
              amountType={amountType}
              handleCalculateTax={handleCalculateTax}
              handleTypeToggle={handleTypeToggle}
            />
          ) : (
            <IncomeResults incomeData={incomeData} />
          )}
        </div>
      </div>
      {/* </CalculatorContext.Provider> */}
    </div>
  );
};

export default App;
