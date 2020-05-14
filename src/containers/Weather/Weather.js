import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import WeatherForm from '../../components/WeatherForm/WeatherForm';

class Weather extends Component {
  render() {
    return (
      <Aux>
        <WeatherForm />
      </Aux>
    );
  }
}

export default Weather;
