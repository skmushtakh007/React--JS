const redux = require('redux'); //importing redux


const INITIAL_VALUE = {
    counter: 0
}
const reducer = (store = INITIAL_VALUE, action) => {        //store immutable
    let newStore = store;
    if (action.type === 'INCREMENT') {
        newStore = { counter: store.counter + 1 }
    }
    else if (action.type === 'DECREMENT') {
        newStore = { counter: store.counter - 1 }
    }
    else if(action.type ==='ADDITION'){
        newStore={counter:store.counter + action.payload.number}
    }
    return newStore;
}
const store = redux.createStore(reducer);   //store wiil take on function reducer


//creating subscriber
const subscriber = () => {
    const state = store.getState();      //it will give only current value
    console.log(state);
}

//creating subscription
store.subscribe(subscriber);         //it will give updated value each time


//creating actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADDITION' , payload:{number:7}});
store.dispatch({ type: 'DECREMENT' });