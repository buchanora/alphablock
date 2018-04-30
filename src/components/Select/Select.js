import  React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SelectButton, CheckListItem, SelectOption} from './common';

export default class SelectFieldSet extends Component{
    constructor(props){
      super(props);
  
      this.state = {
        dropdownVisible: false
      }
  
      this._handleOptionClick = this._handleOptionClick.bind(this)
      
    }
    render(){
      const { name = '',
              disabled,
              selection,
              style,
              options,
              onChange,
              label } = this.props;

      function getStyle(_style){
        let newStyle = _style;
        if(_style === 'button'){
          newStyle = 'buttonGrid'
        }
        if(_style === 'dropdown' || _style === 'list'){
          newStyle = 'checkList'
        }
        return newStyle;
      }

      const selectStyle = getStyle(style)
  
      const optionList = options.map( (option, index)=>{
        switch (selectStyle) {
          case 'checkList':
            return (
              <CheckListItem  key={`check-${index}`}
                              checkerType='tick'
                              disabled={disabled}
                              checked={selection[option.key || option.name]? true: false}
                              optionFor={name}
                              label={option.label || option.value}
                              onChange={onChange.bind(null, option)}/>
            )
            break;
          case 'buttonGrid':
            return (
              <SelectButton   key={`check-${index}`}
                              iconClass={option.iconClass}
                              disabled={disabled}
                              checked={selection[option.key || option.name] ? true : false}
                              optionFor={name}
                              name={option.name}
                              label={option.label || option.value}
                              onChange={onChange.bind(null, option)}/>
              )
            break;
          default:
            return (
              <SelectOption   key={`check-${index}`}
                              disabled={disabled}
                              checked={selection[option.key || option.name] ? true : false}
                              optionFor={name}
                              name={option.name}
                              label={option.label || option.value}
                              onChange={onChange.bind(null, option)}/>
            )
            break;
        }
      })
  
      return (
        <fieldset className={`select-group ${(selectStyle !== 'buttonGrid') ?'select-list' :'select-grid'}`}>
          <legend className='select-label'>{label}</legend>
          {optionList}
        </fieldset>
      );
  
    }
    _handleOptionClick(value){
      this.props.onChange(value);
    }
  }

SelectFieldSet.defaultProps = {
    disabled: false,
    label: 'Select Field Set',
    options: [],
    selection: {},
    onChange: ()=>{}
}

SelectFieldSet.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    expand: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      iconClass: PropTypes.string
    })),
    selection: PropTypes.oneOfType([
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
        iconClass: PropTypes.string
      }), 
      PropTypes.objectOf(PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
        iconClass: PropTypes.string
      }))
    ]),
    style: PropTypes.oneOf(['checkList', 'buttonGrid', 'button', 'dropdown']),
}