import * as React from 'react';
import {Provider, store} from '../store'

export const MainLayout : React.StatelessComponent = (props) => 
  <Provider store={store}>  
    <>
      {props.children}  
    </>
  </Provider>

// If a intial DatabaseId has to be informed:
//  a) inform it once the database list is informed (launch action)
//  b) we could have a container that fires the initial action once
//  c) we could have a saga that uses yield select to get the initial value and launch actions (that will emit event to children)



