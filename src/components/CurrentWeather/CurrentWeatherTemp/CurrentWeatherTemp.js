import React from 'react';
import classes from './CurrentWeatherTemp.module.css';

import celsiusIcon from '../../../assets/images/celsius.png';
import { CurrentWeatherContext } from '../../../context/CurrentWeatherContext';

const CurrentWeatherTemp = () => {
  return (
    <CurrentWeatherContext.Consumer>
      {({ currentTemp }) => (
        <div className='m-0 text-center d-flex align-items-top justify-content-center'>
          <span className={classes.CurrentTemp}>{Math.round(currentTemp)}</span>
          <img
            className={`mt-2 ${classes.Celsius}`}
            src={celsiusIcon}
            alt='Celsius symbol'
          />
        </div>
      )}
    </CurrentWeatherContext.Consumer>
  );
};

export default CurrentWeatherTemp;
