import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {MultiLineField} from '../src/index';


export default storiesOf('MultiLineField', module)
  .add('without value', () => (
    <MultiLineField  label='My Multiline  Field' 
                onChange={action('change')}/>
  ))
  .add('with value', () => (
    <MultiLineField  label='My Multiline  Field' 
                value="We are taking control"
                onChange={action('change')}/>
  ));