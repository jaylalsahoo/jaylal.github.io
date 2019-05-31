import React from 'react';
import { calculatorState } from "./store";
import {connect} from 'react-redux';


class MinusOperation extends React.Component{
    constructor(props){
        super(props);
      this.buttonHandle=this.buttonHandle.bind(this);

    }
    buttonHandle(){
        this.props.dispatch({
            type:"MINUS"
        })
    }
    render(){
        return (
            <div>
                 <button className="btn btn-danger" onClick={this.buttonHandle}>Sub</button>
            </div>
        );
    }
}
let MinusOperationMaker = connect(calculatorState)(MinusOperation);

export {MinusOperationMaker};