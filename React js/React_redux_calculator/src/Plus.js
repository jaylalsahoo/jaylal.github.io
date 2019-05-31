import React from 'react';
import { calculatorState } from "./store";
import {connect} from 'react-redux';


class PlusOperation extends React.Component{
    constructor(props){
        super(props);
      this.buttonHandleAdd=this.buttonHandleAdd.bind(this);

    }
    buttonHandleAdd(){
        this.props.dispatch({
            type:"ADD"
        })
    }
    render(){
        return (
            <div>
                 <button className="btn btn-danger" onClick={this.buttonHandleAdd}>Add</button>
            </div>
        );
    }
}
let PlusOperationMaker = connect(calculatorState)(PlusOperation);

export {PlusOperationMaker};