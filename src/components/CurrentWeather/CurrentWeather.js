import React from 'react';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import classes from './CurrentWeather.module.css';

import CurrentWeatherItem from './CurrentWeatherItem/CurrentWeatherItem';
import CurrentWeatherDate from './CurrentWeatherDate/CurrentWeatherDate';
import CurrentWeatherTemp from './CurrentWeatherTemp/CurrentWeatherTemp';
import CurrentWeatherMeta from './CurrentWeatherMeta/CurrentWeatherMeta';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';
import CurrentWeatherDetailsItem from './CurrentWeatherDetails/CurrentWeatherDetailsItem/CurrentWeatherDetailsItem';
import { metricToImperialSpeed } from '../../utils/conversion';

const CurrentWeather = (props) => {
  console.log(props);
  let currentWeatherDate = <CurrentWeatherDate />;
  let currentWeatherTemp = <CurrentWeatherTemp />;
  let currentLocation = (
    <p className={`m-0 text-center ${classes.CurrentLocation}`}>
      Select a location...
    </p>
  );
  let currentMeta = <CurrentWeatherMeta />;
  let currentWeatherDetails = (
    <CurrentWeatherDetails>
      <CurrentWeatherDetailsItem itemLabel='Clouds' unit='%' />
      <CurrentWeatherDetailsItem itemLabel='Rain' unit='mm' />
      <CurrentWeatherDetailsItem itemLabel='Humidity' unit='%' />
      <CurrentWeatherDetailsItem itemLabel='Wind' unit='Km/h' />
    </CurrentWeatherDetails>
  );

  if (props.location || props.data) {
    currentWeatherDate = React.cloneElement(currentWeatherDate, {
      weatherIcon: props.data.currentWeatherIcon,
    });
    // currentWeatherTemp = <CurrentWeatherTemp temp={props.data.currentTemp} />;
    currentWeatherTemp = React.cloneElement(currentWeatherTemp, {
      temp: props.data.currentTemp,
    });
    currentLocation = (
      <p className={`m-0 text-center ${classes.CurrentLocation}`}>
        {props.location}
      </p>
    );
    currentMeta = React.cloneElement(currentMeta, {
      feelsLike: props.data.currentFeelsLike,
      sunset: props.data.currentSunset,
    });
    currentWeatherDetails = (
      <CurrentWeatherDetails>
        <CurrentWeatherDetailsItem
          itemLabel='Clouds'
          measure={props.data.currentClouds}
          unit='%'
        />
        <CurrentWeatherDetailsItem
          itemLabel='Rain'
          measure={props.data.currentRain}
          unit='mm'
        />
        <CurrentWeatherDetailsItem
          itemLabel='Humidity'
          measure={props.data.currentHumidity}
          unit='%'
        />
        <CurrentWeatherDetailsItem
          itemLabel='Wind'
          measure={Math.round(
            metricToImperialSpeed(props.data.currentWindSpeed)
          )}
          unit='Km/h'
        />
      </CurrentWeatherDetails>
    );
  }

  return (
    <Col
      xs={{ span: 12, order: 1 }}
      className={`font-color-light ${classes.CurrentWeather}`}>
      <div style={{ visibility: props.isLoading ? 'hidden' : 'visible' }}>
        <CurrentWeatherItem>{currentWeatherDate}</CurrentWeatherItem>
        <CurrentWeatherItem>{currentWeatherTemp}</CurrentWeatherItem>
        <CurrentWeatherItem>{currentLocation}</CurrentWeatherItem>
        <CurrentWeatherItem>{currentMeta}</CurrentWeatherItem>
        <CurrentWeatherItem>{currentWeatherDetails}</CurrentWeatherItem>
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
