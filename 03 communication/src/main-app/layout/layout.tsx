import * as React from 'react';
import {MainAppBar, DbPicker} from '../components';
export const Layout : React.StatelessComponent = (props) => 
  <div>
    <MainAppBar/>
    <DbPicker/>
    {props.children}
  </div>
