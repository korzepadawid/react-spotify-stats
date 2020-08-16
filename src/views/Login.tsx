import React, { useEffect } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import qs from 'query-string';
import Heading from '../components/Heading/Heading';
import { signIn } from '../context/actions';
import useAppState from '../hooks/useAppState';
import useAppDispatch from '../hooks/useAppDispatch';
import Loader from '../components/Loader/Loader';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 10%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.spotify.main};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.spotify.dark};
  }
`;

interface Props extends RouteComponentProps {}

const Login = ({ location }: Props) => {
  const appDispatch = useAppDispatch();
  const { accessToken, authStatus } = useAppState();
  const { code } = qs.parse(location.search);

  useEffect(() => {
    if (code) {
      signIn(appDispatch, code.toString());
    }
  }, [appDispatch, code]);

  if (accessToken && authStatus === 'resolved') {
    return <Redirect to="/tracks" />;
  }

  if (authStatus === 'pending') {
    return <Loader />;
  }

  if (authStatus === 'rejected') {
    return <p>Something went wrong...</p>;
  }

  return (
    <Wrapper>
      <Heading>Statistify</Heading>
      <p>
        Have you ever wondered who is your the most listened artists on Spotify?
        <span role="img" aria-label="happy-emoji">
          😄
        </span>
        It's very safe. Statistify is only using user-read-recently-played and user-top-read scopes.
      </p>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT}&scope=user-read-recently-played%20user-top-read&state=34fFs29kd09`}
      >
        <Button>Sign in with Spotify</Button>
      </a>
    </Wrapper>
  );
};

export default Login;
