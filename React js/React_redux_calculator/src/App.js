import React from 'react';
import {Provider,connect} from 'react-redux';
import {myStore,calculatorState} from './store';
import {InputDataMaker} from './input';
import {DisplayDataMaker} from './Display';
import {PlusOperationMaker} from './Plus';
import {MinusOperationMaker} from './minus';
import { MultiplyOperationMaker } from './Multiply';
import { DivideOperationMaker } from './Divide';




class App extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                   <div className="col-md-5 offset-md-3">
                   <h2>React-Redux Calculator</h2>
                  <Provider store={myStore}>
                     <InputDataMaker /> 
                    <PlusOperationMaker /><br></br>
                    <MinusOperationMaker /><br></br>
                    <MultiplyOperationMaker /><br></br>
                    <DivideOperationMaker /><br></br>
                    <DisplayDataMaker />
                </Provider>
                
                </div>
                </div>
            </div>
        );
    }
}

export {App};