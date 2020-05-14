import React from 'react';
import IosSearch from 'react-ionicons/lib/IosSearch';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import classes from './WeatherForm.module.css';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const WeatherForm = (props) => {
  return (
    <Form onSubmit={props.submitLocation}>
      <InputGroup
        size='lg'
        className='bg-white shadow rounded mt-3 mb-4 p-1 w-50 mx-auto'>
        <InputGroup.Prepend className='bg-transparent'>
          <Button className='bg-transparent border-0' type='submit'>
            <IosSearch />
          </Button>
        </InputGroup.Prepend>
        <FormControl
          aria-label='Location'
          className={`border-0 bg-transparent ${classes.CustomControl}`}
          onChange={props.changeValue}
          placeholder='Enter city or town, etc.'
        />
      </InputGroup>
    </Form>
  );
};

export default WeatherForm;
