import * as React from 'react';
import { Route} from 'react-router';
import {MainPage, SubPage} from './pages';

const baseUrl = '/app-a';

export const subAppARoutesPath = {
  default: `${baseUrl}`,
  main: `${baseUrl}/main`,
  sub: `${baseUrl}/sub`,
}

export const SubAppARoutes = (
  <Route path={subAppARoutesPath.default} component={MainPage}>
    <Route path={subAppARoutesPath.main} component={MainPage} />
    <Route path={subAppARoutesPath.sub} component={SubPage} />
  </Route>

);


