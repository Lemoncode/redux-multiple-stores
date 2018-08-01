import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {CPUModuleRoutes, CPUModuleRoutesPath} from './modules/cpu-module'
import {DTUModuleRoutes, DTUModuleRoutesPath} from './modules/dtu-module'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './dashboard';
import { Layout } from './main-app/layout/layout';


ReactDOM.render(    
    <Layout>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Dashboard}/>                    
          <Route path={CPUModuleRoutesPath.root} component={CPUModuleRoutes}/>
          <Route path={DTUModuleRoutesPath.root} component={DTUModuleRoutes}/>
          
        </Switch>
      </HashRouter>            
    </Layout>  
  ,
  document.getElementById('root'));