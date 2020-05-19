import React from 'react';

const MarginContainer = ({
  marginTop = '0',
  marginBottom = '0',
  marginLeft = '0',
  marginRight = '0',
  children,
}) => {
  const style = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };
  return <div style={style}>{children}</div>;
};

export default MarginContainer;
