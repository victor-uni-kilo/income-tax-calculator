import React from 'react';

import { deriveTaxFromGross, deriveTaxFromNet } from '@utils/calculators';

const App = () => {
  return (
    <div>
      <h1 className="test">Initiating App</h1>
      <h1 className="test">{deriveTaxFromGross(11000)}</h1>
      <h1 className="test">{deriveTaxFromNet(9900)}</h1>
    </div>
  );
};

export default App;
