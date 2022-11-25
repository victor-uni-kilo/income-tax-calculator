import React from 'react';
import TabButton from '@components/TabButton';

const TabList = () => {
  return (
    <div className="flex flex-col text-sm font-medium text-center text-gray-500">
      <TabButton text="Income Details" />
      <TabButton text="Income" />
    </div>
  );
};

export default TabList;
