import React from 'react';

const CurrentWeatherItem = (props) => {
  const attachedClasses = [props.className];
  return <div className={attachedClasses.join(' ')}>{props.children}</div>;
};

export default CurrentWeatherItem;
