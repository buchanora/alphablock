// Import  modules
import  React, {
        Component,
}       from  'react';


const computeColor = function(_color, _shade=0){
  let colorString = '';
  if(_color) {
    colorString +=`bg-${_color}-${_shade}`;
  }
  return colorString;
}


const computePadding = function(_padding){

  const sideShorts = {top:'t', bottom: 'b', left: 'l', right: 'r'};
  let classString = '';
  for(let side in _padding){
    if(_padding.hasOwnProperty(side)){
      classString +=`p${sideShorts[side]+_padding[side]} `
    }
  }
  return classString;
}

const computeElevation = function(_l){
  let lString = '';
  if(_l){
    lString +=`elevation-${_l}`
  }
  return lString;
}

export function Section (props){

  let { justifyContent = '',
        alignItems='',
        stretchContent,
        centerText,
        container,
        axis,
        backgroundColor = null,
        fillColor,
        fillShade,
        className='',
        children,
        expand,
        padded,
        style = {} } = props;

  const setExpansion = expand ?'section-expand' : '',
        setAxis = axis==='x' ? 'section-row' : 'section-column',
        setStretch = stretchContent ? 'section-stretch': '',
        setAlign = justifyContent==='center' ? 'section-centralized' : '',
        padding = padded? 'section-padding' : '',
        contained = container ?'contained-section' :'',
        textCentered = centerText ? 'centered-text-section' : '',
        setBackgroundColor = computeColor(fillColor, fillShade);



  return (
        <div  className={ className + ' ' +
                          'section'+ ' ' +
                          contained+' '+
                          textCentered+' '+
                          setStretch +' '+
                          setExpansion +' '+
                          setBackgroundColor + ' '+
                          setAxis+' '+
                          setAlign+ ' ' +
                          padding }
              style={  {...style, backgroundColor, justifyContent: justifyContent, alignItems: alignItems} }>
            { children }
        </div>
  );
}

export function Block(props){

  let { justifyContent = '',
        alignItems='',
        alignSelf,
        fillColor,
        fillShade,
        elevation,
        padding,
        backgroundColor = null,
        expand,
        divider,
        flex,
        noPadding,
        className='',
        children,
        style = {}, } = props;

  const setExpansion = expand ?'block-expand' : '',
        setCollapse = noPadding ?'' :'block-padded',
        addDivider = divider? 'block-divider' : '',
        setFlex = flex? 'block-flex' : '',
        setBackgroundColor = computeColor(fillColor, fillShade),
        setBlockPadding = computePadding(padding),
        setElevation = computeElevation(elevation);


  return (
        <div  className={'block' + ' ' +
                          className + ' '+
                          setExpansion + ' '+
                          setCollapse + ' ' +
                          addDivider + ' '+
                          setFlex + ' '+
                          setBackgroundColor + ' '+
                          setBlockPadding + ' '+
                          setElevation}
              style={  {...style,  justifyContent: justifyContent, alignItems: alignItems, backgroundColor, alignSelf: alignSelf } }>
            { children }
        </div>
  );

}

export function Wrap(props){
  const {children, className = ''} = props;
  const wrapSize = (props.size || 'large') + '-wrap'
  return(
    <div className={`wrap ${className} ${wrapSize}`}>
      {children}
    </div>
  );
}

export function Space(props){
  let ChildComponent, ClonedElement;
  const propArray = [];
  for(let prop in props){
    if(props.hasOwnProperty(prop) && ['top', 'bottom', 'left', 'right'].indexOf(prop.substring(0, prop.length -1)) !== -1)
    propArray.push(prop)
  }
  let prefix 
  if (props.padding){
    prefix = 'p'
  }else if (props.margin){
    prefix = 'm'
  }

  function  computeClasses(_prefix, _props){
    if(!_prefix) return
    return _props.map(s=>{return _prefix + s.substring(0, 1) + s.substring(s.length-1)}).join(' ')
  }

  try {
    ChildComponent = React.Children.only(props.children)
    ClonedElement = React.cloneElement(
      ChildComponent,{
          className:  (ChildComponent.props.className? ChildComponent.props.className: '')+ ' ' + computeClasses(prefix, propArray)
      }
    );
  } catch (e) {
    ChildComponent = props.children;
  }
  return(
    ClonedElement
    ? ClonedElement
    : <div className={computeClasses(prefix, propArray) + ' ' + (props.className || '')}>
        {props.children}
      </div>
  )
}
