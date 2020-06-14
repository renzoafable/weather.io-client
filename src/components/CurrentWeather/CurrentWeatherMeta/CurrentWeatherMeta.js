import React from 'react';
import classes from './CurrentWeatherMeta.module.css';

import dividerIcon from '../../../assets/images/divider.png';
import celsiusIcon from '../../../assets/images/celsius.png';
import { generate24HrTime } from '../../../utils/conversion';

const CurrentWeatherMeta = ({
  currentFeelsLike,
  currentSunset,
  currentTemp,
  currentLocation,
}) => {
  return (
    <>
      <div className={classes.CurrentWeatherTemp}>
        <span className={classes.CurrentTemp}>{Math.round(currentTemp)}</span>
        <img
          className={classes.Celsius}
          src={celsiusIcon}
          alt='Celsius symbol'
        />
      </div>
      <p className={classes.CurrentLocation}>{currentLocation}</p>
      <div className={classes.CurrentWeatherMeta}>
        <span>Feels like {Math.round(currentFeelsLike)}</span>
        <span>
          <img src={dividerIcon} alt='Divider' />
        </span>
        <span>Sunset {generate24HrTime(currentSunset)}</span>
      </div>
    </>
  );
};

export default CurrentWeatherMeta;

CurrentWeatherMeta.defaultProps = {
  currentFeelsLike: 0,
  currentSunset: 0,
  currentTemp: 0,
  currentLocation: 'Select a location...',
};
