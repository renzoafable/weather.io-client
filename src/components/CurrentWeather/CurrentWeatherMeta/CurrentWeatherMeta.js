import React from 'react';
import classes from './CurrentWeatherMeta.module.css';

import { CurrentWeatherContext } from '../../../context/CurrentWeatherContext';
import dividerIcon from '../../../assets/images/divider.png';
import { generate24HrTime } from '../../../utils/conversion';

const CurrentWeatherMeta = () => {
  return (
    <CurrentWeatherContext.Consumer>
      {({ currentFeelsLike, currentSunset }) => {
        return (
          <div className={classes.CurrentWeatherMeta}>
            <span>Feels like {Math.round(currentFeelsLike)}</span>
            <span>
              <img src={dividerIcon} alt='Divider' />
            </span>
            <span>Sunset {generate24HrTime(currentSunset)}</span>
          </div>
        );
      }}
    </CurrentWeatherContext.Consumer>
  );
};

export default CurrentWeatherMeta;
