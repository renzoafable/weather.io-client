import React from 'react';

const Icon = (props) => {
  const style = {
    width: `${props.width}rem` || '50px',
    height: `${props.height}rem` || '50px',
  };
  return <img src={props.src} alt={props.alt} style={style} />;
};

export default Icon;
