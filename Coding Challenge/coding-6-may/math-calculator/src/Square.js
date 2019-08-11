import React from 'react';
import { stateMapper } from './store';
import {connect} from 'react-redux';

class SquareComponent extends React.Component{
    constructor(props){
        super(props);

        this.buttonClciked=this.buttonClciked.bind(this);
    }

    buttonClciked(){
        this.props.dispatch({
            type:"SQUARE"
        })
    }
    render(){
        return (
            <button onClick={this.buttonClciked} className="btn btn-info">Square</button>
        );
    }
}

let Square =connect(stateMapper)(SquareComponent);

export {Square};