import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubAppARoutes, subAppARoutesPath} from './sub-app-a';
import {SubAppBRoutes, subAppBRoutesPath} from './sub-app-b';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './dashboard';


ReactDOM.render(    
    <>                  
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Dashboard}/>                    
          <Route path={subAppARoutesPath.root} component={SubAppARoutes}/>
          <Route path={subAppBRoutesPath.root} component={SubAppBRoutes}/>
          
        </Switch>
      </HashRouter>            
    </>  
  ,
  document.getElementById('root'));