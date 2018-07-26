import * as React from 'react';
import {HelloWorldContainer, NameEditContainer} from './components';

export const App = () => {
  return (
    <div>
      <h3>Hello from sub app A</h3>
      <br/>
      <HelloWorldContainer/>
      <br/>
      <NameEditContainer/>
    </div>
  );
}
