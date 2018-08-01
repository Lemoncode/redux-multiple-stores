import * as React from 'react';
import { Link } from 'react-router-dom';
import {CPUModuleRoutesPath} from './modules/cpu-module'
import {subAppBRoutesPath} from './sub-app-b';

export const Dashboard = () => 
  <>
    <h3>Dashboard - Tap on link to navigate to a given module</h3>
    <Link to={CPUModuleRoutesPath.main}>Navigate to CPU Module</Link>
    <br/>
    <Link to={subAppBRoutesPath.main}>Navigate to SubApp B</Link>
  </>

