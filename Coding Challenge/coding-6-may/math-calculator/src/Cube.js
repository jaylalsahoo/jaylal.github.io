import React from 'react';
import { stateMapper } from './store';
import {connect} from 'react-redux';

class CubeComponent extends React.Component{
    constructor(props){
        super(props);

        this.buttonClciked=this.buttonClciked.bind(this);
    }

    buttonClciked(){
        this.props.dispatch({
            type:"CUBE"
        })
    }
    render(){
        return (
            <button onClick={this.buttonClciked} className="btn btn-info">Cube</button>
        );
    }
}

let Cube =connect(stateMapper)(CubeComponent);

export {Cube};