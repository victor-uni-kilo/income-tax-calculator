import React, { useState, createContext } from 'react';

import TabList from '@components/TabList';
import Header from '@components/Header';
import IncomeDetails from '@components/IncomeDetails';
import IncomeResults from '@components/IncomeResults';

import { TAB_LIST_MAP } from '@constants';

export const CalculatorContext = createContext(null);

const App = () => {
  // UI STATES
  const [currentTab, setCurrentTab] = useState(0);
  // CALCULATION STATES
  const [incomeData, setIncomeData] = useState(null);

  const handleTabClick = index => {
    if (incomeData) {
      setCurrentTab(index);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <CalculatorContext.Provider
        value={{
          incomeDataState: [incomeData, setIncomeData],
          currentTabState: [currentTab, setCurrentTab],
        }}
      >
        <div className="flex h-4/6 w-6/12">
          <TabList tabs={TAB_LIST_MAP} currentTab={currentTab} handleTabClick={handleTabClick} />
          <div className="bg-white-100 p-6 w-full shadow-md rounded-lg">
            <Header />
            {currentTab === 0 ? <IncomeDetails /> : <IncomeResults incomeData={incomeData} />}
          </div>
        </div>
      </CalculatorContext.Provider>
    </div>
  );
};

export default App;
