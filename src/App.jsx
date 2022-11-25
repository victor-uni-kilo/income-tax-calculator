import React from 'react';

import TabList from '@components/TabList';
import Header from '@components/Header';
import Card from '@components/Card';

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex h-4/6 w-7/12">
        <TabList />
        <div className="bg-white-100 p-6 flex-grow shadow-md rounded-lg">
          <Header />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
