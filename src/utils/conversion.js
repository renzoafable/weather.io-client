const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getCurrentDate = () => {
  const date = new Date();
  const currentDate = `${DAYS[date.getDay()]}, ${date.getDate()} ${
    MONTHS[date.getMonth()]
  }`;

  return currentDate;
};

export const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};

export const unixDateToTime = (unixDate) => {
  return new Date(unixDate * 1000);
};

export const metricToImperialSpeed = (speed) => {
  return speed * 3.6;
};
