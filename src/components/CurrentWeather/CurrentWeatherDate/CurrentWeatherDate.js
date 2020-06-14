import React from 'react';
import classes from './CurrentWeatherDate.module.css';

import Icon from '../../../ui/Icon/Icon';
import { getCurrentDate } from '../../../utils/conversion';

const CurrentWeatherDate = ({ currentWeatherIcon }) => {
  const currentDate = getCurrentDate();

  return (
    <div className={classes.CurrentWeatherDate}>
      <Icon
        src={currentWeatherIcon}
        alt='Weather icon'
        width='4.5'
        height='4.5'
      />
      <div className={classes.CurrentDateInfo}>
        <p className={classes.Today}>Today</p>
        <p className={classes.CurrDate}>{currentDate}</p>
      </div>
    </div>
  );
};

export default CurrentWeatherDate;

CurrentWeatherDate.defaultProps = {
  currentWeatherIcon: 'http://openweathermap.org/img/wn/02d@2x.png',
};
