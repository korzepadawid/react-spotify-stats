import React, { useEffect } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import qs from 'query-string';
import { Button } from 'antd';
import Heading from '../components/Heading/Heading';
import { signIn } from '../actions';
import useAppState from '../hooks/useAppState';
import useAppDispatch from '../hooks/useAppDispatch';

interface Props extends RouteComponentProps {}

const Login = ({ location }: Props) => {
  const appDispatch = useAppDispatch();
  const { accessToken } = useAppState();
  const { code } = qs.parse(location.search);

  useEffect(() => {
    if (code) {
      signIn(appDispatch, code.toString());
    }
  }, [appDispatch, code]);

  if (accessToken) {
    return <Redirect to="/tracks" />;
  }

  return (
    <div>
      <Heading>Login</Heading>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT}&scope=user-read-recently-played%20user-top-read&state=34fFs29kd09`}
      >
        <Button>Sign in with Spotify</Button>
      </a>
    </div>
  );
};

export default Login;
