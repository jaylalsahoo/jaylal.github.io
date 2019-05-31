import React from 'react';
import { calculatorState } from "./store";
import {connect} from 'react-redux';


class DivideOperation extends React.Component{
    constructor(props){
        super(props);
      this.buttonHandleAdd=this.buttonHandleAdd.bind(this);

    }
    buttonHandleAdd(){
        this.props.dispatch({
            type:"DIVIDE"
        })
    }
    render(){
        return (
            <div>
                 <button className="btn btn-danger" onClick={this.buttonHandleAdd}>Divide</button>
            </div>
        );
    }
}
let DivideOperationMaker = connect(calculatorState)(DivideOperation);

export {DivideOperationMaker};