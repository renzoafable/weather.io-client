import React from 'react';
import classes from './CurrentWeatherDetails.module.css';

import CurrentWeatherDetailsItem from './CurrentWeatherDetailsItem/CurrentDetailsItem';
import { CurrentWeatherContext } from '../../../context/WeatherContext';

const CurrentWeatherDetails = () => {
  return (
    <CurrentWeatherContext.Consumer>
      {({ currentClouds, currentRain, currentHumidity, currentWindSpeed }) => {
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
      }}
    </CurrentWeatherContext.Consumer>
  );
};

export default CurrentWeatherDetails;
