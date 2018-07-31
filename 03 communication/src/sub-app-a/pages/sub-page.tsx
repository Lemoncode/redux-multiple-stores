import * as React from 'react';
import {HelloWorldContainer, NameEditContainer} from '../components';
import { Link } from 'react-router-dom';

export const SubPage = () => {
  return (    
    <div>
      <h3 style={{color: 'green'}}>Hello from module A- SUBPAGE</h3>
      <Link to="/app-b/main">Navigate to SubApp B</Link>      
    </div>
  );
}