import React, { useContext, useState } from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import IosSearch from 'react-ionicons/lib/IosSearch';

import { WeatherContext } from '../../context/WeatherContext';
import classes from './WeatherForm.module.css';

const WeatherForm = (props) => {
  const { fetchWeatherData } = useContext(WeatherContext);
  const [location, setLocation] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLocationSubmission = (e) => {
    e.preventDefault();
    fetchWeatherData(location);
  };

  return (
    <Form onSubmit={handleLocationSubmission} className={classes.WeatherForm}>
      <InputGroup size='lg' className={classes.WeatherFormGroup}>
        <InputGroup.Prepend className={classes.WeatherFormGroupPrepend}>
          <Button className={classes.WeatherFormGroupButton} type='submit'>
            <IosSearch color='#888' fontSize='1rem' />
          </Button>
        </InputGroup.Prepend>
        <FormControl
          aria-label='Location'
          className={classes.WeatherFormControl}
          onChange={handleInputChange}
          placeholder='Enter city or town, etc.'
          value={location}
        />
      </InputGroup>
    </Form>
  );
};

export default WeatherForm;
