import React from 'react';
import classes from './CurrentWeatherDate.module.css';

import Icon from '../../../ui/Icon/Icon';
import { getCurrentDate } from '../../../utils/conversion';
import { CurrentWeatherContext } from '../../../context/CurrentWeatherContext';

const CurrentWeatherDate = () => {
  const currentDate = getCurrentDate();

  return (
    <CurrentWeatherContext.Consumer>
      {({ currentWeatherIcon }) => (
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
      )}
    </CurrentWeatherContext.Consumer>
  );
};

export default CurrentWeatherDate;
