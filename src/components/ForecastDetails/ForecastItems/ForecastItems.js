import React from 'react';
import Table from 'react-bootstrap/Table';
import classes from './ForecastItems.module.css';

import ForecastItem from './ForecastItem/ForecastItem';
import { ForecastContext } from '../../../context/WeatherContext';

const ForecastItems = () => {
  let forecastItems = (
    <ForecastContext.Consumer>
      {(context) => {
        if (!context.length) {
          const itemList = Array.from(new Array(5));
          return itemList.map((_, i) => {
            return <ForecastItem key={i} />;
          });
        } else {
          return context.map((forecastItem, i) => (
            <ForecastItem key={i} data={forecastItem} />
          ));
        }
      }}
    </ForecastContext.Consumer>
  );

  return (
    <Table
      responsive='sm'
      borderless
      size='sm'
      className={classes.ForecastItems}>
      <thead>
        <tr>
          <th scope='col'>Day</th>
          <th scope='col'>
            Rain
            <span className={classes.Rain}>
              (mm<sup>3</sup>)
            </span>
          </th>
          <th scope='col'>Weather</th>
          <th scope='col'>&#8451;</th>
          <th scope='col' className={classes.Wind}>
            Wind
            <span>(kph)</span>
          </th>
        </tr>
      </thead>
      <tbody>{forecastItems}</tbody>
    </Table>
  );
};

export default ForecastItems;
