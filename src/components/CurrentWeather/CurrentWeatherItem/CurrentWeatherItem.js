import React from 'react';

const CurrentWeatherItem = (props) => {
  const style = {
    marginBottom: '1rem',
  };
  return <div style={style}>{props.children}</div>;
};

export default CurrentWeatherItem;
