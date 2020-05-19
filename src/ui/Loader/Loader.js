import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = (props) => {
  const style = {
    visibility: props.show ? 'visible' : 'hidden',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
  };

  return (
    <div style={style}>
      <Spinner animation='border' role='status' variant='warning'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
