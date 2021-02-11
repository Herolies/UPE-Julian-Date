import React from 'react';
import './index.css';
import { getJulianDate } from './components/dateObjects';

const App = () => {
  return (
    <div className="App">
      <h1>Today's Julian date is: {getJulianDate()}</h1>
    </div>
  );
};

export default App;
