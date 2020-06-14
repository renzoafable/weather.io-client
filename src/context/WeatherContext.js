import React, { useState, useCallback } from 'react';

export const WeatherContext = React.createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [location, setLocation] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetchWeatherData = useCallback(async (location) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://renzo-weather-io.herokuapp.com/weather?address=${location}`
      );
      const data = await response.json();
      if ('error' in data) setLoading(false);
      else {
        const {
          currentWeatherData: currentWeather,
          forecastData,
          location,
        } = data;
        setCurrentWeatherData(currentWeather);
        setForecastData(() => [...forecastData]);
        setLocation(location);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        currentWeatherData,
        forecastData,
        location,
        isLoading,
        fetchWeatherData,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};
