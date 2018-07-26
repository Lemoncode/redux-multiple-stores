import * as React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage, SubPage } from './pages';
import { MainLayout } from './layouts/mainLayout';

const baseUrl = '/app-b';

export const subAppBRoutesPath = {
  root: baseUrl,
  main: `${baseUrl}/main`,
  sub: `${baseUrl}/sub`,
}

export const SubAppBRoutes = () =>
  <MainLayout>
    <>
      <Route path={subAppBRoutesPath.main} component={MainPage} />
      <Route path={subAppBRoutesPath.sub} component={SubPage} />
    </>
  </MainLayout>


