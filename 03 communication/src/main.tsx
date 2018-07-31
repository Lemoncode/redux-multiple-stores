import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {CPUModuleRoutes, CPUModuleRoutesPath} from './modules/cpu-module'

import {SubAppBRoutes, subAppBRoutesPath} from './sub-app-b';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './dashboard';


ReactDOM.render(    
    <>                  
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Dashboard}/>                    
          <Route path={CPUModuleRoutesPath.root} component={CPUModuleRoutes}/>
          <Route path={subAppBRoutesPath.root} component={SubAppBRoutes}/>
          
        </Switch>
      </HashRouter>            
    </>  
  ,
  document.getElementById('root'));