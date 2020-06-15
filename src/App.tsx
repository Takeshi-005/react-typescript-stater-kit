import React from 'react';
import { routes } from './routes/routes';
import { RouteWithSubRoutes } from './routes/RouteWithSubRoutes';
import { Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};

export default App;
