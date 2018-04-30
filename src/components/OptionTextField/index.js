import React from 'react';
import PropTypes from 'prop-types';
import FieldWrap from '../FieldWrap/';


export default function OptionTextField (props) {

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
    options,
    label,
    required,
    uncollapse,
    expand  } = props;

  const dataListOptions = options.map( (option, index)=>{
    return (
      <option value={option} key={`option_${index}`}/>
    )
  })

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
                  list = {`${name}_options`}
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

          <dataList id={`${name}_options`}>
            {dataListOptions}
          </dataList>
        </FieldWrap>
  );

}

OptionTextField.defaultProps = {
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
OptionTextField.propTypes = {
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
  options: PropTypes.array,
  required: PropTypes.bool,
  type: PropTypes.string,
  uncollapse: PropTypes.bool,
  value: PropTypes.string,
}
