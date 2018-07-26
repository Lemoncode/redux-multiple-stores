import * as React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage, SubPage } from './pages';
import { MainLayout } from './layouts/mainLayout';

const baseUrl = '/app-a';

export const subAppARoutesPath = {  
  root: baseUrl,
  main: `${baseUrl}/main`,
  sub: `${baseUrl}/sub`,
}

export const SubAppARoutes = () =>
  <MainLayout>    
      <Route path={subAppARoutesPath.main} component={MainPage} />
      <Route  path={subAppARoutesPath.sub} component={SubPage} />    
  </MainLayout>

