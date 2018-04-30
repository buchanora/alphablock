import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {MultiSelectFieldSet} from '../src/index';


export default storiesOf('Multi-Select Field Set ', module)
  .add('As Checker', () => (
    <MultiSelectFieldSet  label='My Date Field'
                          options={options}
                          onChange={action('change')}/>
  ))
  .add('As Button', () => (
    <MultiSelectFieldSet  label='My Date Field'  
                          options={options}
                          style='buttonGrid'
                          onChange={action('change')}/>
  ))
  .add('As Dropdown', () => (
    <MultiSelectFieldSet  label='My Date Field'
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