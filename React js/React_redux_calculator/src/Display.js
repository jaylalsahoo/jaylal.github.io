import React from 'react';
import {connect} from 'react-redux';
import {calculatorState} from './store';



class DisplayData extends React.Component{
    
    render(){
            return <h2>{this.props.result}</h2>

        }
    }


let DisplayDataMaker =connect(calculatorState)(DisplayData);

export {DisplayDataMaker};