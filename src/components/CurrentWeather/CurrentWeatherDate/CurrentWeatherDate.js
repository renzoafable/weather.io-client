import React from 'react';
import classes from './CurrentWeatherDate.module.css';

import { getCurrentDate } from '../../../utils/conversion';
import { CurrentWeatherContext } from '../../../context/CurrentWeatherContext';

const CurrentWeatherDate = () => {
  const currentDate = getCurrentDate();

  return (
    <CurrentWeatherContext.Consumer>
      {({ currentWeatherIcon }) => (
        <div className='d-flex align-items-center justify-content-center'>
          <img
            className={classes.CurrentWeatherDateIcon}
            src={`http://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`}
            alt='Weather icon'
          />
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className={`m-0 ${classes.Today}`}>Today</p>
            <p className={`m-0 ${classes.CurrDate}`}>{currentDate}</p>
          </div>
        </div>
      )}
    </CurrentWeatherContext.Consumer>
  );
};

export default CurrentWeatherDate;
