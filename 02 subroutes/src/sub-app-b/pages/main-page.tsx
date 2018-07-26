import * as React from 'react';
import {HelloWorldContainer, NameEditContainer} from '../components';
import { Link } from 'react-router-dom';
import {subAppBRoutesPath} from '../routes'

export const MainPage = () => {
  return (    
    <div>
      <h3 style={{color: 'red'}}>Hello from sub app B</h3>
      <br/>
      <HelloWorldContainer/>
      <br/>
      <NameEditContainer/>      
      <br/>
      <Link to={subAppBRoutesPath.sub}>Navigate to Sub page</Link>
      <br/>
      <Link to="/">Go back to dashboard</Link>
      <br/>
      <Link to="/app-a/main">Navigate to SubApp A</Link>            
    </div>
  );
}