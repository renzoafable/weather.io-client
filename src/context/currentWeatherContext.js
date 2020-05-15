import React from 'react';

const currentWeatherContext = React.createContext({
  currentWeatherIcon: '',
  currentTemp: 0,
  currentFeelsLike: 0,
  currentSunset: 0,
  currentClouds: 0,
  currentRain: 0,
  currentHumidity: 0,
  currentWindSpeed: 0,
});

export default currentWeatherContext;
