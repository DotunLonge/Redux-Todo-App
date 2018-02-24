import {createStore, applyMiddleware } from 'redux';
import combined from './reducers';
import thunk from 'redux-thunk';

const store = createStore(combined, {}, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
})

export default store;
