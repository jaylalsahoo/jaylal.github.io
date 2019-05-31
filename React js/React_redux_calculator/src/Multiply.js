import React from 'react';
import { calculatorState } from "./store";
import {connect} from 'react-redux';


class MultiplyOperation extends React.Component{
    constructor(props){
        super(props);
      this.buttonHandleAdd=this.buttonHandleAdd.bind(this);

    }
    buttonHandleAdd(){
        this.props.dispatch({
            type:"MULTIPLY"
        })
    }
    render(){
        return (
            <div>
                 <button className="btn btn-danger" onClick={this.buttonHandleAdd}>Multiply</button>
            </div>
        );
    }
}
let MultiplyOperationMaker = connect(calculatorState)(MultiplyOperation);

export {MultiplyOperationMaker};