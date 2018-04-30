import React from 'react';
import TextField from '../TextField/'

export default function TimeField (props) {

  const timeVal = props.val || ' '
  return(
          <TextField  type='time' placeholder='_ _ : _ _  AM' value={timeVal} {...props}/>
  );
}
