import React from 'react';
import { MyRouteProps } from './routes';
import { Route } from 'react-router';

export const RouteWithSubRoutes = (route: MyRouteProps) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} routes={route.routes ?? []} />}
  />
);
