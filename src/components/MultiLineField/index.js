import React from 'react';
import PropTypes from 'prop-types';
import FieldWrap from '../FieldWrap/';

export default function MultiLineField (props) {
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
        expand,
        size,  } = props;

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

            <textarea   name={name}
                        disabled={disabled}
                        type={type}
                        className='field-input multiline'
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onSubmit={onSubmitEditing}
                        value={value}
                        rows={size}
                        required={required} />

        </FieldWrap>
    );
}

MultiLineField.defaultProps = {
    className: '',
    value: '',
    size: 3,
    required: false,
    onChange: ()=>{},
    onSubmitEditing: ()=>{},
    onKeyDown: ()=>{},
    onKeyUp: ()=>{},
    onBlur: ()=>{},
    onFocus: ()=>{},
    onMouseEnter: ()=>{},
    onMouseLeave: ()=>{},
}
MultiLineField.propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    label: PropTypes.string,
    required: PropTypes.bool,
    uncollapse: PropTypes.bool,
    expand: PropTypes.bool,
    size: PropTypes.number
}
