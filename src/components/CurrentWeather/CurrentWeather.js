import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import classes from './CurrentWeather.module.css';

import Loader from '../../ui/Loader/Loader';
import MarginContainer from '../../ui/MarginContainer/MarginContainer';
import CurrentWeatherDate from './CurrentWeatherDate/CurrentWeatherDate';
import CurrentWeatherMeta from './CurrentWeatherMeta/CurrentWeatherMeta';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';
import { WeatherContext } from '../../context/WeatherContext';

const CurrentWeather = () => {
  const { currentWeatherData, isLoading, location } = useContext(
    WeatherContext
  );

  console.log(currentWeatherData);

  return (
    <Col
      xs={{ order: 1 }}
      lg={{ order: 2, span: 4 }}
      className={classes.CurrentWeather}>
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <MarginContainer marginBottom={'1.5rem'}>
          <CurrentWeatherDate
            currentWeatherIcon={currentWeatherData?.currentWeatherIcon}
          />
        </MarginContainer>
        <MarginContainer marginBottom={'2rem'}>
          <CurrentWeatherMeta
            currentFeelsLike={currentWeatherData?.currentFeelsLike}
            currentSunset={currentWeatherData?.currentSunset}
            currentTemp={currentWeatherData?.currentTemp}
            currentLocation={location}
          />
        </MarginContainer>
        <MarginContainer marginBottom={'1.5rem'}>
          <CurrentWeatherDetails
            currentClouds={currentWeatherData?.currentClouds}
            currentRain={currentWeatherData?.currentRain}
            currentHumidity={currentWeatherData?.currentHumidity}
            currentWindSpeed={currentWeatherData?.currentWindSpeed}
          />
        </MarginContainer>
      </div>
      <Loader show={isLoading} />
    </Col>
  );
};

export default CurrentWeather;
