import React, {Component} from 'react';

export default function FieldGroup (props) {

  return(
      <div className={`fieldGroup ${props.uncollapse? 'fieldGroup--uncollapsed' : ''}`}>
        {props.children}
      </div>
  );

}
