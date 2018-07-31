import * as React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage, SubPage } from './pages';
import { MainLayout } from './layouts/mainLayout';

const baseUrl = '/app-a';

export const CPUModuleRoutesPath = {  
  root: baseUrl,
  main: `${baseUrl}/main`,
  sub: `${baseUrl}/sub`,
}

export const CPUModuleRoutes = () =>
  <MainLayout>    
      <Route path={CPUModuleRoutesPath.main} component={MainPage} />
      <Route  path={CPUModuleRoutesPath.sub} component={SubPage} />    
  </MainLayout>

