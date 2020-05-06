import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

let middlewares = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
