import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const WeatherContainer = (props) => {
  return (
    <Container fluid='sm' className='p-0'>
      <Row>{props.children}</Row>
    </Container>
  );
};

export default WeatherContainer;
