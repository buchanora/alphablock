import React from 'react';
import PropTypes from 'prop-types';

export default function FieldWrap (props) {

  const {   children, 
            className,
            focused,
            onFocus,
            onBlur,
            id, 
            error, 
            label, 
            name, 
            dirty, 
            tabIndex,
            uncollapse, 
            expand  } = props;
  

  return(
      <span  className={`field-wrap ${className} ${dirty ? 'field--dirty' : '' } ${focused ? 'field--focus': ''} ${error? 'field--error': ''} ${uncollapse ?'field--uncollapse' :''} ${expand ?'field--expand' :''}`}
            onFocus={onFocus}
            onBlur={onBlur}
            tabIndex={tabIndex || 1}
            id={id}>

          {children}

          <label  className={`field-label`}
                  htmlFor={name}>
              {error || label}
          </label>
      </span>
  );

}

FieldWrap.defaultProps = {
    className: 'field',
}

FieldWrap.propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    focused: PropTypes.bool,
    dirty: PropTypes.bool,
    error: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    tabIndex: PropTypes.number,
    uncollapse: PropTypes.bool,
    expand: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
}
