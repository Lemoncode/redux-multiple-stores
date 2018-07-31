import { createStore } from 'redux';
import { createProvider } from 'react-redux';
import {reducers} from './reducers';
import {STORE_KEY} from './key';

const nonTypedWindow : any = window;

export const store = createStore(reducers,
  nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__ && nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__()
 );


export const Provider = createProvider(STORE_KEY);