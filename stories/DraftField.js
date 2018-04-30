import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {DraftField, helpers} from '../src/index';


export default storiesOf('DraftField', module)
  .add('without value', () => (
    <DraftField  label='My Text Field' 
                onChange={action('change')}/>
  ))
  .add('with value', () => (
    <DraftField  label='My Text Field' 
                  editorState={initialValue}
                  onChange={action('change')}/>
  ));

  const initialValue = helpers.parseDraftState("We are taking control")