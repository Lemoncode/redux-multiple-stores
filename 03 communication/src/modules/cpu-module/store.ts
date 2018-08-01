import * as React from 'react';
import { createStore, applyMiddleware, compose} from 'redux';
import { createProvider } from 'react-redux';
import {reducers} from './reducers';
import {STORE_KEY} from './key';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const nonTypedWindow : any = window;

export const store = createStore(reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__ && nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__()  
  )
 );


export const Provider = createProvider(STORE_KEY);