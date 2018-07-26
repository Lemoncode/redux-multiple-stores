import * as React from 'react';
import {HelloWorldContainer, NameEditContainer} from '../components';
import { Link } from 'react-router-dom';

export const SubPage = () => {
  return (    
    <div>
      <h3>Hello from module B- SUBPAGE</h3>
      <Link to="/app-a/main">Navigate to SubApp A</Link>
    </div>
  );
}