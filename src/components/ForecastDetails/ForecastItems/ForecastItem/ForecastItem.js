import React from 'react';
import classes from './ForecastItem.module.css';

import Icon from '../../../../ui/Icon/Icon';
import { getDay } from '../../../../utils/conversion';

const ForecastItem = ({ data }) => {
  const day = getDay(data.dt);
  const rain = data.rain ? Object.values(data.rain)[0] : 0;
  const temp = data.main.temp;
  const wind = data.wind.speed;
  const icon = data.weather[0].icon;

  return (
    <tr className={classes.ForecastItem}>
      <td>
        <strong>{day}</strong>
      </td>
      <td>
        <Icon
          src='http://openweathermap.org/img/wn/09d@2x.png'
          alt='Weather icon'
          width='3.5'
          height='3.5'
        />{' '}
        {rain}
      </td>
      <td>
        <Icon
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='Weather icon'
          width='3.5'
          height='3.5'
        />
      </td>
      <td>{temp}</td>
      <td className={classes.ForecastWind}>
        <Icon
          src='http://openweathermap.org/img/wn/50d@2x.png'
          alt='Weather icon'
          width='3.5'
          height='3.5'
        />{' '}
        {wind}
      </td>
    </tr>
  );
};

export default ForecastItem;

ForecastItem.defaultProps = {
  rain: 0,
  temp: 0,
  icon: '02d',
  wind: 0,
  day: getDay(),
};
