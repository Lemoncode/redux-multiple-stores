import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider as SubAppAProvider, store as subAppAStore, subAppARoutes} from './sub-app-a';
import {SubAppB} from './sub-app-b';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './dashboard';

// TODO: create HOC to wrapp providers instantiation passing array
ReactDOM.render(    
    <>
      <SubAppAProvider store={subAppAStore}>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Dashboard}/>          
          {subAppARoutes.map(props => <Route {...props} />)}
          <Route exact={true} path="/pageB" component={SubAppB}/>
        </Switch>
      </HashRouter>
      </SubAppAProvider>
    </>  
  ,
  document.getElementById('root'));