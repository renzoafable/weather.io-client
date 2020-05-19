export const DAYS_ABBR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const MONTHS = [
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

export const getDay = (timestamp) => {
  const date = timestamp ? new Date(timestamp * 1000) : new Date(Date.now());
  return DAYS_ABBR[date.getUTCDay()];
};

export const getMonth = () => {
  const date = new Date();
  return MONTHS[date.getMonth()];
};

export const getDate = () => {
  const date = new Date();
  return date.getDate();
};

export const getCurrentDate = () => {
  return `${getDay()}, ${getDate()} ${getMonth()}`;
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

export const generate24HrTime = (timestamp) => {
  const sunsetDate = unixDateToTime(timestamp);
  return `${sunsetDate.getHours()}:${
    sunsetDate.getMinutes().toString().length < 2
      ? '0' + sunsetDate.getMinutes()
      : sunsetDate.getMinutes()
  }`;
};
