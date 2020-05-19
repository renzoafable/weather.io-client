import React from 'react';
import classes from './ForecastItem.module.css';

import Icon from '../../../../ui/Icon/Icon';
import { getDay } from '../../../../utils/conversion';

const ForecastItem = (props) => {
  let rain = 0;
  let temp = 0;
  let icon = '02d';
  let wind = 0;
  let day = getDay();

  if (props.data) {
    day = getDay(props.data.dt);
    rain = props.data.rain ? Object.values(props.data.rain)[0] : 0;
    temp = props.data.main.temp;
    icon = props.data.weather[0].icon;
    wind = props.data.wind.speed;
  }

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
