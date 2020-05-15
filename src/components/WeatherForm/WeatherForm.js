import React from 'react';
import IosSearch from 'react-ionicons/lib/IosSearch';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import classes from './WeatherForm.module.css';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const WeatherForm = (props) => {
  return (
    <Form
      onSubmit={props.submitLocation}
      className={`mx-auto ${classes.WeatherForm}`}>
      <InputGroup size='lg' className={`bg-white shadow rounded mt-3 mb-4 p-1`}>
        <InputGroup.Prepend className='bg-transparent'>
          <Button className='bg-transparent border-0 px-2' type='submit'>
            <IosSearch color='#888' fontSize='1rem' />
          </Button>
        </InputGroup.Prepend>
        <FormControl
          aria-label='Location'
          className={`border-0 bg-transparent px-2 ${classes.CustomControl}`}
          onChange={props.changeValue}
          placeholder='Enter city or town, etc.'
          value={props.location}
        />
      </InputGroup>
    </Form>
  );
};

export default WeatherForm;
