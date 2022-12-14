import React from 'react';
import PropTypes from 'prop-types';

import TabButton from './buttons/TabButton';

const TabList = ({ tabs, handleTabClick, currentTab }) => {
  return (
    <div className="flex flex-col gap-2 text-sm font-medium text-center text-gray-500">
      {tabs &&
        tabs.map((tab, index) => {
          return (
            <TabButton
              key={`tab-${index}`}
              onClick={() => handleTabClick(index)}
              innerText={tab.tabText}
              isCurrent={currentTab === index}
            />
          );
        })}
    </div>
  );
};

TabList.propTypes = {
  tabs: PropTypes.array,
  handleTabClick: PropTypes.func,
  currentTab: PropTypes.number,
};

export default TabList;
