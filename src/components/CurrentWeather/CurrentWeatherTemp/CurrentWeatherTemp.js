import React from 'react';
import classes from './CurrentWeatherTemp.module.css';

import celsiusIcon from '../../../assets/images/celsius.png';

const CurrentWeatherTemp = (props) => {
  let temp = 0;
  if (props.temp) temp = Math.round(props.temp);
  return (
    <div className='m-0 text-center d-flex align-items-top justify-content-center'>
      <span className={classes.CurrentTemp}>{temp}</span>
      <img
        className={`mt-2 ${classes.Celsius}`}
        src={celsiusIcon}
        alt='Celsius symbol'
      />
    </div>
  );
};

export default CurrentWeatherTemp;
