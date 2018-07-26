import * as React from 'react';
import { Route, Switch} from 'react-router';
import {MainPage, SubPage} from './pages';

const baseUrl = '/app-a';

export const subAppARoutesPath = {
  default: `${baseUrl}`,
  main: `${baseUrl}/main`,
  sub: `${baseUrl}/sub`,
}

/*
export const SubAppARoutes = (
  <Route path={subAppARoutesPath.default} component={MainPage}>  
    <Route exact={true} path={subAppARoutesPath.main} component={MainPage} />
    <Route exact={true} path={subAppARoutesPath.sub} component={SubPage} />
  </Route>
);*/

export const subAppARoutes = [
  { path: subAppARoutesPath.main, component: MainPage },
  { path: subAppARoutesPath.sub, component: SubPage }  
]

