import * as React from 'react';
import { Link } from 'react-router-dom';
import { DTUModuleRoutesPath } from '../../dtu-module/routes';

export const SubPage = () => {
  return (    
    <div>
      <h3 style={{color: 'red'}}>Hello from CPU Module- SUBPAGE</h3>
      <Link to={DTUModuleRoutesPath.main}>Navigate back</Link>      
    </div>
  );
}