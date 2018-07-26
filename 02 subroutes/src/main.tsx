import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubAppARoutes} from './sub-app-a';
import {SubAppB} from './sub-app-b';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './dashboard';

ReactDOM.render(    
    <>      
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Dashboard}/>          
          <Route exact={true} path="/pageB" component={SubAppB}/>
          <SubAppARoutes/>          
        </Switch>
      </HashRouter>      
    </>  
  ,
  document.getElementById('root'));