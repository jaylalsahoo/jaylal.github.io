import React from 'react';
import { stateMapper } from './store';
import {connect} from 'react-redux';

class DisplayComponent extends React.Component{
    render(){
        return (
          <div>
              <h2>{this.props.result}</h2>
          </div>
        );
    }
}

let Display= connect(stateMapper)(DisplayComponent);

export {Display};