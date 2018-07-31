import * as React from 'react';
import {HelloWorldContainer, NameEditContainer} from '../components';
import { Link } from 'react-router-dom';
import {subAppARoutesPath} from '../routes'

export const MainPage = () => {
  return (    
    <div>
      <h3 style={{color: 'green'}}>Hello from sub app A</h3>
      <br/>
      <HelloWorldContainer/>
      <br/>
      <NameEditContainer/>      
      <br/>
      <Link to={subAppARoutesPath.sub}>Navigate to Sub page</Link>
      <br/>
      <Link to="/">Go back to dashboard</Link>
      <br/>
      <Link to="/app-b/main">Navigate to SubApp B</Link>      
    </div>
  );
}