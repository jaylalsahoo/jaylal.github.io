import React from 'react';
import {Input} from './Input';
import { Square } from './Square';
import {Provider ,connect} from 'react-redux';
import {Store} from './store';
import {Display} from './Display';
import {Cube} from './Cube';
import { SquareRoot } from './squareroot';


class App extends React.Component{
    render(){
        return (
            <div className="container">
              <div className="row">
                <div className="col-md-4 offset-md-3">
                  <h1>React-Redux-Calculator</h1>
                  <Provider store={Store}>
                  <Input />
                  <p></p>
                  <Square />&nbsp;
                  <Cube />&nbsp;
                  <SquareRoot />
                  <Display />
                  </Provider>
                </div>
              </div>
            </div>
        );
    }
}

export {App};