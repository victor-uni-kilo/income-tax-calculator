import React, { useState } from 'react';

import TabList from '@components/TabList';
import Header from '@components/Header';
import IncomeDetails from '@components/IncomeDetails';
import IncomeResults from '@components/IncomeResults';

import { TAB_LIST_MAP } from '@constants';

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabClick = index => setCurrentTab(index);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex h-4/6 w-6/12">
        <TabList tabs={TAB_LIST_MAP} currentTab={currentTab} handleTabClick={handleTabClick} />
        <div className="bg-white-100 p-6 flex-grow shadow-md rounded-lg">
          <Header />
          {currentTab === 0 ? <IncomeDetails /> : <IncomeResults result={19686} />}
        </div>
      </div>
    </div>
  );
};

export default App;
