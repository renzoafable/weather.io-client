import React from 'react';
import classes from './CurrentWeatherMeta.module.css';

import dividerIcon from '../../../assets/images/divider.png';
import { unixDateToTime } from '../../../utils/conversion';

const CurrentWeatherMeta = (props) => {
  let feelsLike, sunsetTime;

  if (props.feelsLike || props.sunset) {
    feelsLike = Math.round(props.feelsLike);
    const sunsetDate = unixDateToTime(props.sunset);
    sunsetTime = `${sunsetDate.getHours()}:${
      sunsetDate.getMinutes().toString().length < 2
        ? '0' + sunsetDate.getMinutes()
        : sunsetDate.getMinutes()
    }`;
  }

  return (
    <div className={`text-center ${classes.CurrentWeatherMeta}`}>
      <span>Feels like {feelsLike}</span>
      <span>
        <img src={dividerIcon} alt='Divider' />
      </span>
      <span>Sunset {sunsetTime}</span>
    </div>
  );
};

export default CurrentWeatherMeta;
