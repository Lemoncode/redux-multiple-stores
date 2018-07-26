import * as React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage, SubPage } from './pages';
import { MainLayout } from './layouts/mainLayout';

const baseUrl = '/app-a';

export const subAppARoutesPath = {
  default: `${baseUrl}`,
  main: `${baseUrl}/main`,
  sub: `${baseUrl}/sub`,
}

export const SubAppARoutes = () =>
  <MainLayout>
    <>
      <Route exact={true} path={subAppARoutesPath.main} component={MainPage} />
      <Route exact={true} path={subAppARoutesPath.sub} component={SubPage} />
    </>
  </MainLayout>


/*
export const SubAppARoutes = () => 
  <Route path={subAppARoutesPath.default} component={MainLayout}>  
    <Route exact={true} path={subAppARoutesPath.main} component={MainPage} />
    <Route exact={true} path={subAppARoutesPath.sub} component={SubPage} />
  </Route>
*/

/*
export const subAppARoutes = [
  { path: subAppARoutesPath.main, component: MainPage },
  { path: subAppARoutesPath.sub, component: SubPage }  
]
*/
