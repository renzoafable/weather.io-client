import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import classes from './ForecastItems.module.css';

import ForecastItem from './ForecastItem/ForecastItem';

const ForecastItems = ({ forecastData }) => {
  const [forecastItems, setItems] = useState([]);

  useEffect(() => {
    setItems(() => [...forecastData]);
  }, [forecastData]);

  return forecastData.length ? (
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
      <tbody>
        {forecastItems.map((forecastItem, i) => (
          <ForecastItem key={i} data={forecastItem} />
        ))}
      </tbody>
    </Table>
  ) : (
    <div className={classes.Placeholder}>
      <p>Select a location...</p>
    </div>
  );
};

export default ForecastItems;
