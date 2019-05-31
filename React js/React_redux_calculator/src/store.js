import {createStore} from 'redux';

let calculator = function(oldState, action){
    let newState = {
        num1: 0,
        num2:0,
        result:0,
    }

    if(oldState===undefined){
        return newState;
    }

    newState.num1 = oldState.num1;
    newState.num2= oldState.num2;
    
    


    if(action.type==="INPUT1"){
        newState.num1 = action.num1;
    }
    if(action.type==="INPUT2"){
        newState.num2 = action.num2;
    }

    if(action.type==="ADD"){
       newState.result = parseInt(newState.num1) + parseInt(newState.num2);
    } 
    
    if(action.type==="MINUS"){
        newState.result = parseInt(newState.num1) - parseInt(newState.num2);
     } 
     if(action.type==="MULTIPLY"){
        newState.result = parseInt(newState.num1) * parseInt(newState.num2);
     } 
     if(action.type==="DIVIDE"){
        newState.result = parseInt(newState.num1) / parseInt(newState.num2);
     } 

    return newState;
}

let myStore = createStore(calculator);

myStore.subscribe(function(){
    console.log(myStore.getState());
})

function calculatorState(state){
    return state;
}

export {myStore,calculatorState};
