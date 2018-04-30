import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {TextField, DateField, TimeField, MultiLineField, DraftField, FieldRow} from '../src/index';


export default storiesOf('FieldRow', module)
  .add('collapsed', () => (
    <div>
      <FieldRow>
        <TextField  label='My Text Field' 
                      onChange={action('change')}/>
        <TextField  label='My Text Field' 
                    onChange={action('change')}/>
        <TextField  label='My Text Field' 
                    onChange={action('change')}/>
      </FieldRow>
      <FieldRow>
        <DateField  label='My Text Field' 
                      onChange={action('change')}/>
        <TimeField  label='My Text Field' 
                    onChange={action('change')}/>
        <DateField  label='My Text Field' 
                    onChange={action('change')}/>
        <TimeField  label='My Text Field' 
                    onChange={action('change')}/>
      </FieldRow>
      <FieldRow>
        <MultiLineField   label='My Text Field' 
                          onChange={action('change')}
                          expand/>
      </FieldRow>
    </div>
  ))
  .add('uncollapsed', () => (
    <div>
      <FieldRow uncollapse>
        <TextField  label='My Text Field' 
                      onChange={action('change')}/>
        <TextField  label='My Text Field' 
                    onChange={action('change')}/>
        <TextField  label='My Text Field' 
                    onChange={action('change')}/>
      </FieldRow>
      <FieldRow uncollapse>
        <DateField  label='My Text Field' 
                      onChange={action('change')}/>
        <TimeField  label='My Text Field' 
                    onChange={action('change')}/>
        <DateField  label='My Text Field' 
                    onChange={action('change')}/>
        <TimeField  label='My Text Field' 
                    onChange={action('change')}/>
      </FieldRow>
      <FieldRow>
        <MultiLineField   label='My Text Field' 
                          onChange={action('change')}
                          expand/>
      </FieldRow>
    </div>
  ))