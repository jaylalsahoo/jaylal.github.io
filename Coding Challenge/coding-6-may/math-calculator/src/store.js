import {createStore} from 'redux';

let myReducer = function(oldState,action){
    let newState ={
        input:0,
        result:0
    }

    if(!oldState){
        return newState;
    }

    newState.input = oldState.input;

    if(action.type==="INPUT"){
        newState.input= action.data;
    }

    if(action.type==="SQUARE"){
       newState.result= newState.input *newState.input;
    }

    if(action.type==="CUBE"){
        newState.result= newState.input *newState.input*newState.input;
     }

     if(action.type==="ROOT"){
        newState.result= Math.sqrt(newState.input);
     }

    return newState;
}

let Store =createStore(myReducer);

Store.subscribe(function(){
    console.log(Store.getState());
});

function stateMapper(state){
    return state;
}

export {Store, stateMapper};

