import React from 'react';
import classes from './CurrentWeatherDetailsItem.module.css';

const CurrentWeatherDetailsItem = (props) => {
  return (
    <div
      className={`d-flex align-items-center justify-content-center mx-auto my-2 ${classes.CurrentWeatherDetailsItem}`}>
      <div>{props.itemLabel}</div>
      <div className={`mx-2 ${classes.DottedDivider}`}></div>
      <div>{`${props.measure}${props.unit}`}</div>
    </div>
  );
};

export default CurrentWeatherDetailsItem;
