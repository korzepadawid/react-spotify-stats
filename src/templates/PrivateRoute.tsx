import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAppState from '../hooks/useAppState';

interface Props {
  component: React.FC;
  path: string;
}

const PrivateRoute = ({ component, path }: Props) => {
  const { accessToken, authStatus } = useAppState();
  return accessToken && authStatus === 'resolved' ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
