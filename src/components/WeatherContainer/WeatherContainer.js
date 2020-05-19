import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import classes from './WeatherContainer.module.css';

const WeatherContainer = (props) => {
  return (
    <Container fluid='md' className={classes.WeatherContainer}>
      <Row xs={1} sm={1} md={1} lg={2}>
        {props.children}
      </Row>
    </Container>
  );
};

export default WeatherContainer;
