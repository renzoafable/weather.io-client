import React from 'react';

import WeatherForm from '../../components/WeatherForm/WeatherForm';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';
import ForecastDetails from '../../components/ForecastDetails/ForecastDetails';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import { WeatherProvider } from '../../context/WeatherContext';

const Weather = () => {
  return (
    <WeatherProvider>
      <WeatherForm />
      <WeatherContainer>
        <ForecastDetails />
        <CurrentWeather />
      </WeatherContainer>
    </WeatherProvider>
  );
};

export default Weather;
