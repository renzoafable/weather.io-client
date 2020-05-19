import React from 'react';
import IosSearch from 'react-ionicons/lib/IosSearch';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import classes from './WeatherForm.module.css';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const WeatherForm = (props) => {
  return (
    <Form onSubmit={props.submitLocation} className={classes.WeatherForm}>
      <InputGroup size='lg' className={classes.WeatherFormGroup}>
        <InputGroup.Prepend className={classes.WeatherFormGroupPrepend}>
          <Button className={classes.WeatherFormGroupButton} type='submit'>
            <IosSearch color='#888' fontSize='1rem' />
          </Button>
        </InputGroup.Prepend>
        <FormControl
          aria-label='Location'
          className={classes.WeatherFormControl}
          onChange={props.changeValue}
          placeholder='Enter city or town, etc.'
          value={props.location}
        />
      </InputGroup>
    </Form>
  );
};

export default WeatherForm;
