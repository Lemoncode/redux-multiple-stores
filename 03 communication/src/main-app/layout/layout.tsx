import * as React from 'react';
import {MainAppBar, DbPickerContainer} from '../components';
import {Provider, store} from '../store'

export const Layout : React.StatelessComponent = (props) => 
  <Provider store={store}>
    <div>
      <MainAppBar/>
      <DbPickerContainer/>
      {props.children}
    </div>
  </Provider>
