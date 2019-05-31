import React from 'react';
import {connect} from 'react-redux';
import {calculatorState} from './store';


class InputData extends React.Component{
    constructor(props){
        super(props);

        this.inputHandle1=this.inputHandle1.bind(this);
        this.inputHandle2=this.inputHandle2.bind(this);
        
    }

    inputHandle1(event){
        this.props.dispatch({
            type:"INPUT1",
            num1:event.target.value
        })
    }
    inputHandle2(event){
        this.props.dispatch({
            type:"INPUT2",
            num2:event.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="number" className="form-control" onChange={this.inputHandle1} />
                <p></p>
                <input type="number" className="form-control" onChange={this.inputHandle2} />
                <p></p>
               
            </div>
        );
    }
}
let InputDataMaker = connect(calculatorState)(InputData);

export {InputDataMaker};