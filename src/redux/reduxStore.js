import { combineReducers, createStore } from 'redux';
import { dialogPageReducer } from './dialogPageReducer';
import { postPageReducer } from './postPageReducer';

let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    postPage: postPageReducer
});

let store = createStore(reducers);
window.store = store;

export { store };