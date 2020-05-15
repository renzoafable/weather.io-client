import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import WeatherForm from '../../components/WeatherForm/WeatherForm';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';
import ForecastDetails from '../../components/ForecastDetails/ForecastDetails';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';

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
        const { data } = await axios.get(
          `http://localhost:8000/weather?address=${this.state.location}`
        );
        console.log(data);
        if ('error' in data) this.setState({ isLoading: false });
        else this.setState({ weatherData: data, isLoading: false });
      });
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentWeatherData = () => {
    return {
      currentWeatherIcon: this.state.weatherData.currentWeatherData.weather[0]
        .icon,
      currentTemp: this.state.weatherData.currentWeatherData.main.temp,
      currentFeelsLike: this.state.weatherData.currentWeatherData.main
        .feels_like,
      currentSunset: this.state.weatherData.currentWeatherData.sys.sunset,
      currentClouds: this.state.weatherData.currentWeatherData.clouds.all,
      currentRain: this.state.weatherData.currentWeatherData.rain
        ? Object.values(
            this.state.weatherData.currentWeatherData.rain
          )[0].toFixed(2)
        : 0,
      currentHumidity: this.state.weatherData.currentWeatherData.main.humidity,
      currentWindSpeed: this.state.weatherData.currentWeatherData.wind.speed,
    };
  };

  render() {
    let forecastDetails = <ForecastDetails />;
    let currentWeather = <CurrentWeather isLoading={this.state.isLoading} />;

    if (this.state.weatherData) {
      forecastDetails = <ForecastDetails />;
      currentWeather = (
        <CurrentWeather
          isLoading={this.state.isLoading}
          data={this.getCurrentWeatherData()}
          location={this.state.weatherData.location}
        />
      );
    }

    return (
      <Aux>
        <WeatherForm
          changeValue={this.inputChangeHandler}
          location={this.state.location}
          submitLocation={this.locationSubmitHandler}
        />
        <WeatherContainer>
          {forecastDetails}
          {currentWeather}
        </WeatherContainer>
      </Aux>
    );
  }
}

export default Weather;
