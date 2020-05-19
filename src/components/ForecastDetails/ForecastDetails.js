import React from 'react';
import Col from 'react-bootstrap/Col';
import classes from './ForecastDetails.module.css';

import Loader from '../../ui/Loader/Loader';
import ForecastItems from './ForecastItems/ForecastItems';

const ForecastDetails = (props) => {
  return (
    <Col
      xs={{ order: 2 }}
      lg={{ order: 1, span: 8 }}
      className={classes.ForecastDetails}>
      <div style={{ visibility: props.isLoading ? 'hidden' : 'visible' }}>
        <p className={classes.ForecastDetailsHeader}>
          Forecast details <span>(for 5 days)</span>
        </p>
        <ForecastItems />
      </div>
      <Loader show={props.isLoading} />
    </Col>
  );
};

export default ForecastDetails;
