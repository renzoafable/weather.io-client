import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import classes from './CurrentWeather.module.css';

import Loader from '../../ui/Loader/Loader';
import MarginContainer from '../../ui/MarginContainer/MarginContainer';
import CurrentWeatherDate from './CurrentWeatherDate/CurrentWeatherDate';
import CurrentWeatherTemp from './CurrentWeatherTemp/CurrentWeatherTemp';
import CurrentWeatherMeta from './CurrentWeatherMeta/CurrentWeatherMeta';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';

class CurrentWeather extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.isLoading !== this.props.isLoading ||
      nextProps.location !== this.props.location
    ) {
      return true;
    } else return false;
  }

  render() {
    let currentLocation = (
      <p className={classes.CurrentLocation}>
        {this.props.location ? this.props.location : 'Select a location...'}
      </p>
    );

    return (
      <Col
        xs={{ order: 1 }}
        lg={{ order: 2, span: 4 }}
        className={classes.CurrentWeather}>
        <div
          style={{ visibility: this.props.isLoading ? 'hidden' : 'visible' }}>
          <MarginContainer marginBottom={'1.5rem'}>
            <CurrentWeatherDate />
          </MarginContainer>
          <MarginContainer marginBottom={'.5rem'}>
            <CurrentWeatherTemp />
          </MarginContainer>
          <MarginContainer marginBottom={'1rem'}>
            {currentLocation}
          </MarginContainer>
          <MarginContainer marginBottom={'2rem'}>
            <CurrentWeatherMeta />
          </MarginContainer>
          <MarginContainer marginBottom={'1.5rem'}>
            <CurrentWeatherDetails />
          </MarginContainer>
        </div>
        <Loader show={this.props.isLoading} />
      </Col>
    );
  }
}

export default CurrentWeather;
