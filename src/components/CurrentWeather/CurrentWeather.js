import React from 'react';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import classes from './CurrentWeather.module.css';

import CurrentWeatherItem from './CurrentWeatherItem/CurrentWeatherItem';
import CurrentWeatherDate from './CurrentWeatherDate/CurrentWeatherDate';
import CurrentWeatherTemp from './CurrentWeatherTemp/CurrentWeatherTemp';
import CurrentWeatherMeta from './CurrentWeatherMeta/CurrentWeatherMeta';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';

const CurrentWeather = (props) => {
  console.log(props);
  let currentLocation = (
    <p className={`m-0 text-center ${classes.CurrentLocation}`}>
      {props.location ? props.location : 'Select a location...'}
    </p>
  );

  return (
    <Col
      xs={{ span: 12, order: 1 }}
      className={`font-color-light ${classes.CurrentWeather}`}>
      <div style={{ visibility: props.isLoading ? 'hidden' : 'visible' }}>
        <CurrentWeatherItem className='mb-3'>
          <CurrentWeatherDate />
        </CurrentWeatherItem>
        <CurrentWeatherItem className='mb-1'>
          <CurrentWeatherTemp />
        </CurrentWeatherItem>
        <CurrentWeatherItem className='mb-4'>
          {currentLocation}
        </CurrentWeatherItem>
        <CurrentWeatherItem className='mb-4'>
          <CurrentWeatherMeta />
        </CurrentWeatherItem>
        <CurrentWeatherItem className='mb-3'>
          <CurrentWeatherDetails />
        </CurrentWeatherItem>
      </div>
      <div
        className={classes.Spinner}
        style={{ visibility: props.isLoading ? 'visible' : 'hidden' }}>
        <Spinner animation='border' role='status' variant='warning'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      </div>
    </Col>
  );
};

export default CurrentWeather;
