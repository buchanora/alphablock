import  React, {Component} from 'react';
import Select from './Select'

export default class MultiSelectFieldSet extends Component{
    constructor(props){
      super(props);
      this.state = {};
      this._handleCheckStateChange = this._handleCheckStateChange.bind(this)
      
    }
  
    componentWillMount(){
      const {options=[], values={}} = this.props;
      let optionState = {};
      options.forEach((option)=>{
        optionState[option.name] = values[option.name] || false
      })
      this.setState(optionState)
      // console.log(values);
    }
    componentWillReceiveProps(newProps){
      let options = {};
      // console.log(newProps)
      for (let value in newProps.values){
        options[newProps.values[value]] = true
      }
      this.setState(options)
    }
  
    _handleCheckStateChange = (optionValue)=>{
      this.setState((curState)=>({
        [optionValue]: !curState[optionValue]
      }))
      this.props.onChange(optionValue)
    }
    render(){
      return (
        <Select onChange={this._handleCheckStateChange} {...this.props}/>
      );
    }
  
  }