import React, { Component } from 'react';

import WeatherForm from '../../components/WeatherForm/WeatherForm';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';
import ForecastDetails from '../../components/ForecastDetails/ForecastDetails';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import {
  CurrentWeatherProvider,
  ForecastProvider,
} from '../../context/CurrentWeatherContext';

class Weather extends Component {
  state = {
    location: '',
    weatherData: null,
    isLoading: false,
  };

  inputChangeHandler = (e) => {
    this.setState({ location: e.target.value });
  };

  locationSubmitHandler = (e) => {
    e.preventDefault();
    try {
      this.setState({ isLoading: true }, async () => {
        const response = await fetch(
          `https://renzo-weather-io.herokuapp.com/weather?address=${this.state.location}`
        );
        const data = await response.json();
        if ('error' in data) this.setState({ isLoading: false });
        else this.setState({ weatherData: data, isLoading: false });
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let forecastDetails = <ForecastDetails isLoading={this.state.isLoading} />;
    let currentWeather = <CurrentWeather isLoading={this.state.isLoading} />;

    if (this.state.weatherData) {
      forecastDetails = (
        <ForecastProvider value={this.state.weatherData.forecastData}>
          <ForecastDetails isLoading={this.state.isLoading} />
        </ForecastProvider>
      );
      currentWeather = (
        <CurrentWeatherProvider
          value={this.state.weatherData.currentWeatherData}>
          <CurrentWeather
            isLoading={this.state.isLoading}
            location={
              this.state.weatherData
                ? this.state.weatherData.location
                : this.state.location
            }
          />
        </CurrentWeatherProvider>
      );
    }

    return (
      <>
        <WeatherForm
          changeValue={this.inputChangeHandler}
          location={this.state.location}
          submitLocation={this.locationSubmitHandler}
        />
        <WeatherContainer>
          {forecastDetails}
          {currentWeather}
        </WeatherContainer>
      </>
    );
  }
}

export default Weather;
