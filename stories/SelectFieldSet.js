import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {SelectFieldSet} from '../src/index';


export default storiesOf('Select Field Set ', module)
  .add('As Checker', () => (
    <SelectFieldSet   label='My Select Field' 
                      options={options}
                      onChange={action('change')}/>
  ))
  .add('As Button', () => (
    <SelectFieldSet   label='My Date Field' 
                      options={options}
                      style='buttonGrid'
                      onChange={action('change')}/>
  ))
  .add('As Dropdown', () => (
    <SelectFieldSet   label='My Date Field'
                      style='checkList'
                      options={options}
                      onChange={action('change')}/>
  ));


  const options = [
    {
      key: 'opt1',
      label: 'Option One',
      iconClass: false
    },
    {
      key: 'opt2',
      label: 'Option Two',
      iconClass: false
    },
    {
      key: 'opt3',
      label: 'Option Three',
      iconClass: false
    },
  ]