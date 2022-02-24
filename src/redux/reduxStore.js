import { combineReducers, createStore } from 'redux';
import { dialogPageReducer } from './dialogPageReducer';
import { postPageReducer } from './postPageReducer';

let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    postPage: postPageReducer
});

export let store = createStore(reducers);

