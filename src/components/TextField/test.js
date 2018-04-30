
import React from "react";
import ReactDOM from "react-dom";
import TextField from "./";

function field(_node, id){
    return _node.getElementsByTagName('div')[0]
}

function getArray(_domList){
    return [].map.call(_domList, (item, index)=>{
        return item
    })
}

function input(_node){
    return _node.getElementsByTagName('input')[0]
}

function value(_input){
    return _input.value
}

function label(_node){
    return _node.getElementsByTagName('label')
}

describe('TextField', ()=>{
    const node = document.createElement('div');

    afterEach(()=>{
        ReactDOM.unmountComponentAtNode(node)
    })

    it('renders an input element', ()=>{
        ReactDOM.render(<TextField id='fieldNode'/>, node)
        expect( getArray(field(node, 'fieldNode').children) ).toContain(<input/>);
    })

    it('renders an label element', ()=>{
        ReactDOM.render(<TextField id='fieldNode' name='test'/>, node)
        expect( getArray(field(node, 'fieldNode').children) ).toContain(<label class="textField-label" for="test"/>);
    })

    it('adds dirty class to label when field has a value', ()=>{
        ReactDOM.render(<TextField value='I am TextField' id='fieldNode'/>, node)
        expect( field(node, 'fieldNode').classList ).toContain('textField--dirty');
    })

    it('adds error class to label when field has an error', ()=>{
        ReactDOM.render(<TextField error='Wrong Value' id='fieldNode'/>, node)
        expect( field(node, 'fieldNode').classList ).toContain('textField--error');
    })

    it('renders a value', ()=>{
        ReactDOM.render(<TextField value='I am TextField'/>, node)
        expect( value( input(node) ) ).toBe('I am TextField');
    })
})