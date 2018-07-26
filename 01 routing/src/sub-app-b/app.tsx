import * as React from 'react';
import {HelloWorldContainer, NameEditContainer} from './components';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <h3>Hello from sub app B</h3>
      <br/>
      <HelloWorldContainer/>
      <br/>
      <NameEditContainer/>
      <br/>
      <Link to="/">Navigate to SubApp A</Link>
    </div>
  );
}
