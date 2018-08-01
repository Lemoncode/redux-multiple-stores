import * as React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage, SubPage } from './pages';
import { MainLayout } from './layouts/mainLayout';

const baseUrl = '/dtu-module';

export const DTUModuleRoutesPath = {  
  root: baseUrl,
  main: `${baseUrl}/main`,
  sub: `${baseUrl}/sub`,
}

export const DTUModuleRoutes = () =>
  <MainLayout>    
      <Route path={DTUModuleRoutesPath.main} component={MainPage} />
      <Route  path={DTUModuleRoutesPath.sub} component={SubPage} />    
  </MainLayout>

