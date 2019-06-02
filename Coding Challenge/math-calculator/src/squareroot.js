import React from 'react';
import { stateMapper } from './store';
import {connect} from 'react-redux';

class RootComponent extends React.Component{
    constructor(props){
        super(props);

        this.buttonClciked=this.buttonClciked.bind(this);
    }

    buttonClciked(){
        this.props.dispatch({
            type:"ROOT"
        })
    }
    render(){
        return (
            <button onClick={this.buttonClciked} className="btn btn-info">SquareRoot</button>
        );
    }
}

let SquareRoot =connect(stateMapper)(RootComponent);

export {SquareRoot};