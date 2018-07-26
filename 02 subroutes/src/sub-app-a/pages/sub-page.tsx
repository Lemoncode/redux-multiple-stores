import * as React from 'react';
import {HelloWorldContainer, NameEditContainer} from '../components';
import { Link } from 'react-router-dom';

export const SubPage = () => {
  return (    
    <div>
      <h3>Hello from module A, subpage</h3>
      <br/>
      <HelloWorldContainer/>
      <br/>
      <NameEditContainer/>
      <br/>
      <Link to="/pageB">Navigate to SubApp B</Link>
    </div>
  );
}