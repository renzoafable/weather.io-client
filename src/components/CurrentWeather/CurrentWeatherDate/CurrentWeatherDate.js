import React from 'react';
import classes from './CurrentWeatherDate.module.css';

import { getCurrentDate } from '../../../utils/conversion';

const CurrentWeatherDate = (props) => {
  const currentDate = getCurrentDate();
  let weatherIcon = '09d';

  if (props.weatherIcon) weatherIcon = props.weatherIcon;

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <img
        className={classes.CurrentWeatherDateIcon}
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt='Weather icon'
      />
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <p className={`m-0 ${classes.Today}`}>Today</p>
        <p className={`m-0 ${classes.CurrDate}`}>{currentDate}</p>
      </div>
    </div>
  );
};

export default CurrentWeatherDate;
