export const getJulianDate = () => {
  let now = new Date();
  let beginYear = new Date(now.getFullYear(), 0, 0);
  //timeZoneOffset() gets the difference of time between UTC and local macine time in milliSeconds
  let timeDiff =
    now -
    beginYear +
    (beginYear.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  let dayOfYear = Math.floor(timeDiff / (86400000));
  let currentYear = now.getFullYear().toString().substr(-2);
  let jDate =
    '' + currentYear + (dayOfYear < 100 ? '' + 0 + dayOfYear : dayOfYear);

  return jDate;
};
