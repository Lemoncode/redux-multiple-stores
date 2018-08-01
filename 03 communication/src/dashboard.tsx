import * as React from 'react';
import { Link } from 'react-router-dom';
import {CPUModuleRoutesPath} from './modules/cpu-module'
import {DTUModuleRoutesPath} from './modules/dtu-module'

export const Dashboard = () => 
  <>
    <h3>Dashboard - Tap on link to navigate to a given module</h3>
    <Link to={CPUModuleRoutesPath.main}>Navigate to CPU Module</Link>
    <br/>
    <Link to={DTUModuleRoutesPath.main}>Navigate to DTU Module</Link>
  </>

