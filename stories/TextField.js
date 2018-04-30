import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {TextField} from '../src/index';


export default storiesOf('TextField', module)
  .add('without value', () => (
    <TextField  label='My Text Field' 
                onChange={action('change')}/>
  ))
  .add('with value', () => (
    <TextField  label='My Text Field' 
                value="We are taking control"
                onChange={action('change')}/>
  ));