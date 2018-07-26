import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubAppA} from './sub-app-a';
import {SubAppB} from './sub-app-b';
import { HashRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(    
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={SubAppA}/>
          <Route exact={true} path="/pageB" component={SubAppB}/>
        </Switch>
      </HashRouter>
    </>  
  ,
  document.getElementById('root'));