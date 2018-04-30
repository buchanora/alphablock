import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {  Editor,
          ContentState,
          EditorState,
          RichUtils,
          convertFromHTML,
          convertToRaw,
          convertFromRaw,
}         from 'draft-js';
import FieldWrap from '../FieldWrap/';

const blockTypes = [
  {label:null, style:'header-four', iconClass:'header'},
  // {label:null, style:'paragraph', iconClass:'paragraph'},
  {label:null, style:'unordered-list-item', iconClass:'listing-box'},
  {label:null, style:'ordered-list-item', iconClass:'listing-number'},
]

const inlineStyles = [
  {label:null, style:'BOLD', iconClass:'bold'},
  {label:null, style:'ITALIC', iconClass:'italic'}
]

export default class DraftField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.onChange = this._onChange.bind(this);
    this._handleKeyCommand = this._handleKeyCommand.bind(this)
    this._handleBlurDraft = this._handleBlurDraft.bind(this)
    this._handleFocusDraft = this._handleFocusDraft.bind(this)
  }
  _onChange = (editorState)=>{
    
    const currentContent = editorState.getCurrentContent();
    const hasText = currentContent.hasText();

    this.setState(()=>{
      return {
          dirty: hasText,
          editorState: editorState,
      }
    })

    this.props.onChange({
        target:{
          value: editorState
        }
    });
  }

  componentWillMount(){
    if (this.props.value){
      this.setState({
          dirty: true,
      })
    }
  }
  render() {
    const { label, 
            expand,
            id,
            className,
            error,
            uncollapse,
            value, 
            editorState }=this.props;

    const getEditorState = (_editorState)=>{
      if (_editorState){
        return _editorState
      } 
      return this.state.editorState;
    }

    const currentEditorState = getEditorState(editorState || value)

    const inFocus = this.state.inFocus? true : false;

    const dirty = currentEditorState.getCurrentContent().hasText()? true: false;

    return (
      <FieldWrap  className={`draftField ${className}`}
                  label={label}
                  focused={inFocus}
                  dirty={dirty}
                  expand={expand}
                  id={id}
                  error={error}
                  tabIndex={1}
                  uncollapse={uncollapse}
                  onFocus={this._handleFocusDraft.bind(this)} 
                  onBlur={this._handleBlurDraft.bind(this)}>

        <header className='draftField-toolbar'>
          <InlineStylesToolBar  onToggle={this.toggleInlineStyle}
                                editorState={currentEditorState}/>
          <BlockTypesToolBar  onToggle={this.toggleBlockType}
                              editorState={currentEditorState}/>
        </header>

        <div className='draftField-content'>
          <Editor editorState={currentEditorState}
                  className='draftField-editor'
                  ref={el=>this.draft=el}
                  handleKeyCommand={this._handleKeyCommand}
                  onChange={this.onChange}/>
        </div>

      </FieldWrap>
    );
  }
  _handleBlurDraft(){
    this.setState({
      inFocus:false
    })
  }
  _handleFocusDraft(){
    this.draft.focus()
    this.setState({
      inFocus:true
    })
  }
  _handleKeyCommand(command){
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if(newState){
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  _toggleInlineStyle(style){
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, style)
    );
  }
  _toggleBlockType(style){
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, style)
    );
  }
}

DraftField.propTypes = {
  value: PropTypes.object,
  error: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  editorState: PropTypes.object,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  uncollapse: PropTypes.bool,
  expand: PropTypes.bool,
  handleKeyCommand: PropTypes.func
};

class Tool extends Component{
  constructor(props){
    super(props);
    this.toggle = this._toggle.bind(this)
  }
  render(){
   const { iconClass='settings',
           active = '',
           label,
           showLabel } = this.props;

   return(
     <span className={`toolbar-button icofont ${active && 'toolbar-button--active'} icofont-${iconClass} `}
           onMouseDown={this.toggle}>
           {(showLabel && label) && label}
     </span>
   )
 }
 _toggle(event){
   event.preventDefault()
   this.props.onToggle(this.props.style)
 }
}

function BlockTypesToolBar(props){
  const {editorState} = props;
  let blockType, selection;
  if(editorState){
    selection = editorState.getSelection();
    blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType()
  }
  return(
    <div className='draft-tool-group'>
      {
        blockTypes.map((type, index)=>(
          <Tool key={`${type.style}-${index}`}
                active={type.style === blockType}
                iconClass={type.iconClass}
                onToggle={props.onToggle}
                style={type.style}/>
        ))
      }
    </div>
  )
}

function InlineStylesToolBar(props){
  let currentStyle;
  if (props.editorState) {
    currentStyle = props.editorState.getCurrentInlineStyle()
  }

  return(
    <div className='draft-tool-group'>
      {
        inlineStyles.map((type, index)=>(
          <Tool key={`${type.style}-${index}`}
                iconClass={type.iconClass}
                onToggle={props.onToggle}
                active={currentStyle && currentStyle.has(type.style)}
                style={type.style}/>
        ))
      }
    </div>
  )
}

export function serializeDraftState(editorState){
  if (!editorState){
    return JSON.stringify(convertToRaw(EditorState.createEmpty().getCurrentContent()));
  }
  const currentContent = editorState.getCurrentContent();
  const valueString = JSON.stringify(convertToRaw(currentContent));
  return valueString;
}

export function parseDraftState(_value){
  if (!_value || _value === ''){
    return EditorState.createEmpty()
  }
  try {
    const JSONobj = JSON.parse(_value);
    return EditorState.createWithContent(
      convertFromRaw(JSONobj)
    )
  } catch (e) {
    const savedHTML = convertFromHTML(_value)
    return EditorState.createWithContent(
      ContentState.createFromBlockArray(
        savedHTML.contentBlocks,
        savedHTML.entityMap
      )
    );
  }
}
