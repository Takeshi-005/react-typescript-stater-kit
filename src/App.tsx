import React from 'react';
import { routes } from './routes/routes';
import { RouteWithSubRoutes } from './routes/RouteWithSubRoutes';
import { Switch } from 'react-router-dom';
import Header from './components/container/organisms/Header';
import Footer from './components/container/organisms/Footer';
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      <Footer />
    </>
  );
};
export default App;
