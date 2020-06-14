import React from 'react';
import classes from './CurrentWeatherDetails.module.css';

import CurrentWeatherDetailsItem from './CurrentWeatherDetailsItem/CurrentDetailsItem';

const CurrentWeatherDetails = ({
  currentClouds,
  currentRain,
  currentHumidity,
  currentWindSpeed,
}) => {
  return (
    <div className={classes.CurrentWeatherDetails}>
      <p>Weather Details</p>
      <CurrentWeatherDetailsItem
        itemLabel='Clouds'
        measure={currentClouds}
        unit='%'
      />
      <CurrentWeatherDetailsItem
        itemLabel='Rain'
        measure={currentRain}
        unit='mm'
      />
      <CurrentWeatherDetailsItem
        itemLabel='Humidity'
        measure={currentHumidity}
        unit='%'
      />
      <CurrentWeatherDetailsItem
        itemLabel='Wind'
        measure={currentWindSpeed}
        unit='kph'
      />
    </div>
  );
};

export default CurrentWeatherDetails;

CurrentWeatherDetails.defaultProps = {
  currentClouds: 0,
  currentRain: 0,
  currentHumidity: 0,
  currentWindSpeed: 0,
};
