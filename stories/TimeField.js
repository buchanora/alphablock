import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {TimeField} from '../src/index';


export default storiesOf('TimeField', module)
  .add('without value', () => (
    <TimeField  label='My Time Field' 
                onChange={action('change')}/>
  ))
  .add('with value', () => (
    <TimeField  label='My Time Field' 
                value="We are taking control"
                onChange={action('change')}/>
  ));