import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Artists from './Artists';
import Tracks from './Tracks';
import Recents from './Recents';
import Login from './Login';
import NotFound from './NotFound';
import PrivateRoute from '../templates/PrivateRoute';
import Provider from '../templates/Provider';

const Root = () => (
  <BrowserRouter>
    <Provider>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/artists" component={Artists} />
          <PrivateRoute path="/tracks" component={Tracks} />
          <PrivateRoute path="/recents" component={Recents} />
          <Route component={NotFound} />
        </Switch>
      </MainTemplate>
    </Provider>
  </BrowserRouter>
);

export default Root;
