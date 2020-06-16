import React from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { PAGE_PATH } from '../constants/path';

// Pages
import Map from '../components/container/pages/Map/index';
import Home from '../components/container/pages/Home/index';
import Calendar from '../components/container/pages/Calendar/index';

type PropsWithRoutes = RouteComponentProps<{}> & {
  routes: MyRouteProps[];
};

export type MyRouteProps = RouteProps & {
  component: React.FC<PropsWithRoutes>;
  naviText?: string;
  path: string;
  exact: boolean;
  routes?: MyRouteProps[];
};

export const routes: MyRouteProps[] = [
  {
    path: PAGE_PATH.root,
    exact: true,
    component: Home,
    naviText: 'Home'
  },
  {
    path: PAGE_PATH.map,
    exact: true,
    component: Map,
    naviText: '地図から探す'
  },
  {
    path: PAGE_PATH.calendar,
    exact: true,
    component: Calendar,
    naviText: 'カレンダー'
  }
];
