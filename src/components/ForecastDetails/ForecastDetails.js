import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';

import { WeatherContext } from '../../context/WeatherContext';
import Loader from '../../ui/Loader/Loader';
import ForecastItems from './ForecastItems/ForecastItems';
import classes from './ForecastDetails.module.css';

const ForecastDetails = () => {
  const { isLoading, forecastData } = useContext(WeatherContext);

  return (
    <Col
      xs={{ order: 2 }}
      lg={{ order: 1, span: 8 }}
      className={classes.ForecastDetails}>
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <p className={classes.ForecastDetailsHeader}>
          Forecast details <span>(for 5 days)</span>
        </p>
        <ForecastItems forecastData={forecastData} />
      </div>
      <Loader show={isLoading} />
    </Col>
  );
};

export default ForecastDetails;
