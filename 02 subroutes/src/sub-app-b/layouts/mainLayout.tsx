import * as React from 'react';
import {Provider, store} from '../store'

export const MainLayout : React.StatelessComponent = (props) => 
  <Provider store={store}>
    {props.children}
  </Provider>