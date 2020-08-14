import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAppState from '../hooks/useAppState';

interface Props {
  component: React.FC;
  path: string;
}

const PrivateRoute = ({ component, path }: Props) => {
  const { accessToken } = useAppState();
  return accessToken ? <Route path={path} component={component} /> : <Redirect to="/" />;
};

export default PrivateRoute;
