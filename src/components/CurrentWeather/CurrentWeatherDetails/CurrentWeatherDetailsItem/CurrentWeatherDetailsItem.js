import React from 'react';
import classes from './CurrentWeatherDetailsItem.module.css';

const CurrentWeatherDetailsItem = (props) => {
  return (
    <div className={classes.CurrentWeatherDetailsItem}>
      <div>{props.itemLabel}</div>
      <div className={classes.DottedDivider}></div>
      <div>{`${props.measure}${props.unit}`}</div>
    </div>
  );
};

export default CurrentWeatherDetailsItem;
