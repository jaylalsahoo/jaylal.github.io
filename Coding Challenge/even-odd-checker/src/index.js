import {createStore} from 'redux';

let myChecker =function(state,action){
    if(state === undefined){
        return {
            number:0,
            isOdd:false,
            isEven:false
        }
    }
    console.log(action);
    if(action.type==="CHECK"){
        if(action.number%2==0){
            return {isEven:true}
        }
        else{
            return {isOdd:true}
        }
    }
}

let myStore = createStore(myChecker);

myStore.subscribe(function(){
    console.log(myStore.getState());
})

myStore.dispatch({
    type:"CHECK",
    number:123
})
myStore.dispatch({
    type:"CHECK",
    number:122
})