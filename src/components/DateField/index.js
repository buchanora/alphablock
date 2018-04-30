import React from 'react';
import TextField from '../TextField/'


export default function DateField (props) {

  let dateVal = props.value ?props.value.split('T')[0] : ' ';

  return(
      <TextField {...props} type='date' value={dateVal} placeholder='dd/mm/yyyy'/>
  );

}
