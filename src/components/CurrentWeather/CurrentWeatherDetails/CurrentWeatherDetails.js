import React from 'react';
import classes from './CurrentWeatherDetails.module.css';

const CurrentWeatherDetails = (props) => {
  return (
    <div className={`${classes.CurrentWeatherDetails}`}>
      <p className='font-weight-bold mb-1'>Weather Details</p>
      {props.children}
    </div>
  );
};

export default CurrentWeatherDetails;
