import * as React from 'react';
import { Link } from 'react-router-dom';
import {DTUModuleRoutesPath} from '../routes'
import { DTUIndicatorContainer } from '../components';

export const MainPage = () => {
  return (    
    <div>
      <h3 style={{color: 'green'}}>Hello from dtu-module</h3>

      <DTUIndicatorContainer/>

      <Link to={DTUModuleRoutesPath.sub}>Navigate to Sub page</Link>
      <br/>
      <Link to="/">Go back to dashboard</Link>
      <br/>
      <Link to="/cpu-module/main">Navigate to CPU module</Link>      
    </div>
  );
}