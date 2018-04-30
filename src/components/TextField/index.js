import React from 'react';
import PropTypes from 'prop-types';
import FieldWrap from '../FieldWrap/';

export default function TextField (props) {

  const {   name,
            disabled,
            type,
            value,
            error,
            id,
            className,
            onChange,
            onSubmitEditing,
            onKeyDown,
            onKeyUp,
            onBlur,
            onFocus,
            onMouseEnter,
            onMouseLeave,
            label,
            required,
            uncollapse,
            expand  } = props;
  

    return(
        <FieldWrap  name={name}
                    disabled={disabled}
                    dirty={value}
                    error={error}
                    uncollapse={uncollapse}
                    label={label}
                    expand={expand}
                    id={id}
                    className={`${className}`}>

          <input  name={name}
                  disabled={disabled}
                  type={type}
                  className='field-input text-field'
                  onChange={onChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  onKeyDown={onKeyDown}
                  onKeyUp={onKeyUp}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onSubmit={onSubmitEditing}
                  value={value}
                  required={required} />
        </FieldWrap>
    );

}

TextField.defaultProps = {
    className: '',
    value: '',
    onChange: ()=>{},
    onSubmitEditing: ()=>{},
    onKeyDown: ()=>{},
    onKeyUp: ()=>{},
    onBlur: ()=>{},
    onFocus: ()=>{},
    onMouseEnter: ()=>{},
    onMouseLeave: ()=>{},
}
TextField.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    expand: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string,
    uncollapse: PropTypes.bool,
    value: PropTypes.string,
}
