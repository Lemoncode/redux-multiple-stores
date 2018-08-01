import * as React from 'react';
import { Link } from 'react-router-dom';
import { DTUModuleRoutesPath } from '../routes';

export const SubPage = () => {
  return (    
    <div>
      <h3 style={{color: 'red'}}>Hello from DTU Module- SUBPAGE</h3>
      <Link to={DTUModuleRoutesPath.main}>Navigate back</Link>      
    </div>
  );
}