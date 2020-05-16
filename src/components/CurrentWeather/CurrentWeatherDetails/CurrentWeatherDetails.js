import React from 'react';
import classes from './CurrentWeatherDetails.module.css';

import CurrentWeatherDetailsItem from './CurrentWeatherDetailsItem/CurrentWeatherDetailsItem';
import { CurrentWeatherContext } from '../../../context/CurrentWeatherContext';

const CurrentWeatherDetails = () => {
  return (
    <CurrentWeatherContext.Consumer>
      {({ currentClouds, currentRain, currentHumidity, currentWindSpeed }) => {
        return (
          <div className={`${classes.CurrentWeatherDetails}`}>
            <p className='font-weight-bold mb-1'>Weather Details</p>
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
              unit='Km/h'
            />
          </div>
        );
      }}
    </CurrentWeatherContext.Consumer>
  );
};

export default CurrentWeatherDetails;