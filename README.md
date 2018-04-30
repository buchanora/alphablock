# Overview

<!-- > WARNING!!! This library is undergoing active prerelease development. Please check back daily for feature/documentation updates & bug fixes. -->

Fieldstack is the most robust [ReactJS](https://facebook.github.io/react) component library for building beautiful, flexible & highly interactive form-based interfaces.

## Installation
```npm install --save fieldstack```

## Styles

Fieldstack relies on SCSS for styling. Be sure to import the library's style sheets into your application's Scss.

### Sass Import
```
@import '~fieldstack/lib/style_config'
@import '~fieldStack/lib/default_theme';
@import '~fieldstack/lib/base_styles';
```
>To customize theme colors, fonts etc, copy `style_config.scss` and replace the values in it with your custom values.

## Basic Example
```
  import React, {Component} from 'react';
  import {FieldStack} from 'fieldstack';

  class SampleForm extends Component{
    state: {
      values: {}
    }
    render(){
      const actions = {
        onChange: this.handleChange.bind(this)
      }
      return(
        <FieldStack formData={formData}
                    values={this.state.values}
                    actions={actions}/>
      );
    }
    handleChange(fieldName, event){
      this.setState(currentState=>({
        values: {
          [fieldName]: event.target.value,
          ...currentState.values
        }
      }))
    }
  }

  formData: {
    formTitle: 'Signup Form',
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
      },
      {
        name: 'website',
        label: 'Company Website',
        type: 'url',
      },
      {
        name: 'about',
        label: 'Company Bio',
        type: 'multiline-text',
      },
      {
        name: 'regDate',
        label: 'Registration Date',
        type: 'date',
      },
      {
        name: 'time',
        label: 'Office Resumption Time',
        type: 'time',
      },
      {
        name: 'industry',
        label: 'Industry',
        type: 'option-text',
        options: [
          'Automobile',
          'Building',
          'Cosmetics',
          'Eduction',
        ]
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
      }
      {
        name: 'accountType',
        label: 'Account Type',
        type: 'selectFieldSet',
        options: [
          {key:'savings', label: 'Saving Account'},
          {key:'current', label: 'Current Account'},
          {key:'escrow', label: 'Escrow Account'},
          {key:'dom', label: 'Dom Account'},
        ]
      },
      {
        name: 'addon',
        label: 'Addon Features',
        type: 'multiSelectFieldSet',
        options: [
          {key:'social', label: 'Social Banking'},
          {key:'lifestyle', label: 'Lifestyle Banking'},
          {key:'mobile', label: 'Mobile Banking'}
        ]
      },
    ]
  }
```
> See [Fieldstack](#fieldstack) Component documentation 
>for a more advanced example

# Components

## [Fieldstack](#fieldstack)
<!--- ### Example --->

### Props

#### activeFieldIndex
> `number` | defaults to null

#### actions
> `object` | defaults to `{}`

#### disabledForm
> `boolean` | defaults to `false`

#### disabledFields
> `object` | defaults to `{}`

#### formData
> `object` | defaults to `null`

#### fieldErrors
> `object` | defaults to `{}`

#### formError
> `string` | defaults to `null`

#### render
> `function(options: object)` | defaults to `null`

#### values
> `object` | defaults to `{}`



## [TextField](#textField)
## [DateField](#DateField)
## [TimeField](#timeField)
<!--- ### Example --->

### Props

#### className
> `string` | defaults to `""`

#### disabled
> `boolean` | defaults to `false`

#### error
> `string` | defaults to `null`

#### expand
> `boolean` | defaults to `false`

#### id
> `string` | defaults to `""`

#### label
> `string` | defaults to `""`

#### name
> `string` | defaults to `null`

#### onChange
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### SubmitEditing
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onKeyDown
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onKeyUp
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onMouseEnter
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onMouseLeave
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### required
> `bolean` | defaults to `false`

#### type
> `string` | defaults to `""`

#### uncollapse
> `bolean` | defaults to `false`

#### values
> `string` | defaults to `""`

## [OptionTextField](#OptionTextField)
### Props
Same as `TextField` +
#### rows
> `options` | defaults to `[]`

## [MultiLineField](#MultiLineField)
### Props
Same as `TextField` +
#### rows
> `number` | defaults to `3`

## [DraftField](#DraftField)
### Props
#### className
> `string` | defaults to `""`

#### error
> `string` | defaults to `null`

#### expand
> `boolean` | defaults to `false`

#### id
> `string` | defaults to `""`

#### label
> `string` | defaults to `""`

#### onChange
> `function(event: syntheticEvent)` | defaults to `()=>{}`

<!-- #### onKeyDown
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onKeyUp
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onMouseEnter
> `function(event: syntheticEvent)` | defaults to `()=>{}`

#### onMouseLeave
> `function(event: syntheticEvent)` | defaults to `()=>{}` -->

<!-- #### required
> `bolean` | defaults to `false` -->

#### uncollapse
### Props
> `bolean` | defaults to `false`

#### editorState
### Props
> `object` | defaults to ` <DraftJS Editor State>`

## [FieldRow](#FieldRow)
### Props
#### uncollapse
> `uncollapse` | defaults to `false`

<!-- ## [RangeSelect](#RangeSelect) -->
## [SelectFieldSet](#SelectFieldSet)
### Props
#### className
> `string` | defaults to `""`

#### disabled
> `boolean` | defaults to `false`

#### error
> `string` | defaults to `null`

#### expand
> `boolean` | defaults to `false`

#### id
> `string` | defaults to `""`

#### label
> `string` | defaults to `""`

#### name
> `string` | defaults to `null`

#### onChange
> `function(event: syntheticEvent)` | defaults to `()=>{}`
#### options
> `array` | defaults to `null`
#### selection
> `object []` | 
> of shape:
> `{ key: string,
>   label: string,
>   iconClass: string }` | 
>defaults to `null`
#### style
> `string` | one of `checkList`, `buttonGrid` | defaults to `null`
## [MultiSelectFieldSet](#MultiSelectFieldSet)
### Props
#### className
> `string` | defaults to `""`

#### disabled
> `boolean` | defaults to `false`

#### error
> `string` | defaults to `null`

#### expand
> `boolean` | defaults to `false`

#### id
> `string` | defaults to `""`

#### label
> `string` | defaults to `""`

#### name
> `string` | defaults to `null`

#### onChange
> `function(event: syntheticEvent)` | defaults to `()=>{}`
#### options
> `array` | defaults to `null`
#### selection
> `object` | 
> of shape:
> `{ key: string,
>   label: string,
>   iconClass: string }` | 
>defaults to `null`
#### style
> `string` | one of `checkList`, `buttonGrid` | defaults to `null`

<!-- ## [SelectButton](#SelectButton) -->
<!-- ## [SuggestionField](#SuggestionField) -->
## [UploadField](#UploadField)
###props
#### name
> `string` | defaults to `null`
#### icon
> `boolean` | defaults to `true`
#### disabled
> `boolean` | defaults to `false`
#### onChange
> `function(event: syntheticEvent)` | defaults to `()=>{}`
#### label
> `string` | defaults to `""`
#### multiple
> `boolean` | defaults to `false`
#### required
> `boolean` | defaults to `false`


## License
MIT

<!---## Utilities
## Styles --->



