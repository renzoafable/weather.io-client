import React from 'react';

export const CurrentWeatherContext = React.createContext({
  currentWeatherIcon: '09d',
  currentTemp: 0,
  currentFeelsLike: 0,
  currentSunset: 0,
  currentClouds: 0,
  currentRain: 0,
  currentHumidity: 0,
  currentWindSpeed: 0,
  location: 'Select a location...',
});

export const CurrentWeatherProvider = ({ children, value }) => {
  return (
    <CurrentWeatherContext.Provider value={value}>
      {children}
    </CurrentWeatherContext.Provider>
  );
};
