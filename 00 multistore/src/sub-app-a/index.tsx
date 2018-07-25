import * as React from 'react';
import { createStore } from 'redux';
import { createProvider } from 'react-redux';
import {reducers} from './reducers';
import {App} from './app';
import {STORE_KEY} from './key';

const nonTypedWindow : any = window;
const store = createStore(reducers,
                          nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__ && nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__()
                         );


const Provider = createProvider(STORE_KEY);

export const SubAppA = () =>   
  <Provider store={store}>
    <>
    <App/>
    </>
  </Provider>  