var Redux = require('redux');
var combineReducers = Redux.combineReducers;
var createStore = Redux.createStore;

import mainReducer from './reducers/mainReducer';

const store = createStore(combineReducers({
    data: mainReducer
}));

export default store;