import * as React from 'react';
import { Link } from 'react-router-dom';
import {CPUModuleRoutesPath} from '../routes'
import { CPUIndicatorContainer } from '../components';

export const MainPage = () => {
  return (    
    <div>
      <h3 style={{color: 'green'}}>Hello from cpu-module</h3>

      <CPUIndicatorContainer/>

      <Link to={CPUModuleRoutesPath.sub}>Navigate to Sub page</Link>
      <br/>
      <Link to="/">Go back to dashboard</Link>
      <br/>
      <Link to="/dtu-module/main">Navigate to DTU Module</Link>      
    </div>
  );
}