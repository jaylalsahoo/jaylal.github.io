import {createStore} from 'redux';

let myReducer = function(state,action){
    if(state===undefined){
        return {counter:0};
    }

    if(action.type==="INCREMENT"){
        state.counter= state.counter+1;
        return state;
    }
    if(action.type==="DECREMENT"){
        state.counter= state.counter-1;
        return state;
    }
    if(action.type==="RESET"){
        state.counter=0;
        return state;
    }
}


let store = createStore(myReducer);

store.subscribe(function(){
    let state = store.getState();
    console.log(state.counter);
})

store.dispatch({
    type:"INCREMENT"
})
store.dispatch({
    type:"DECREMENT"
})
store.dispatch({
    type:"RESET"
})