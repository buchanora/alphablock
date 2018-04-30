import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {DateField} from '../src/index';


export default storiesOf('DateField', module)
  .add('without value', () => (
    <DateField  label='My Date Field' 
                onChange={action('change')}/>
  ))
  .add('with value', () => (
    <DateField  label='My Date Field' 
                value="We are taking control"
                onChange={action('change')}/>
  ));