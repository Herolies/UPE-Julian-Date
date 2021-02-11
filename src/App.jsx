import React from 'react';
import './index.css';

const App = () => {
  let now = new Date();
  let beginYear = new Date(now.getFullYear(), 0, 0);
  let timeDiff =
    now -
    beginYear +
    (beginYear.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  let millisecondsToDay = 1000 * 60 * 60 * 24;
  let dayOfYear = Math.floor(timeDiff / millisecondsToDay);
  let twoDigitDay = '' + 0 + dayOfYear;
  let jDate = (dayOfYear < 100) ? twoDigitDay : dayOfYear;

  return (
    <div className="App">
      <h1>{jDate}</h1>
    </div>
  );
};

export default App;
