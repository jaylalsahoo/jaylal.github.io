import React from 'react';
import { stateMapper } from './store';
import {connect} from 'react-redux';

class InputComponent extends React.Component{
    constructor(props){
        super(props);

        this.inputHandle=this.inputHandle.bind(this);
    }

    inputHandle(event){
        this.props.dispatch({
            type:"INPUT",
            data:event.target.value
        })
    }
    render(){
        return (
            <div>
                <input onChange={this.inputHandle} type="number" className="form-control" />
            </div>
        );
    }
}

let Input= connect(stateMapper)(InputComponent);

export {Input};