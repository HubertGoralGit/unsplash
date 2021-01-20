import React from 'react';
import GlobalStyles from '../theme/GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../routes/index';
import Home from './Home';
import Results from './Results';

const Root = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.results} component={Results} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
