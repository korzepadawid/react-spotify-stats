import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import qs from 'query-string';
import Heading from '../components/Heading/Heading';
import { signIn } from '../context/actions';
import useAppState from '../hooks/useAppState';
import useAppDispatch from '../hooks/useAppDispatch';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 10%;
  height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  text-align: center;

  @media (min-width: 768px) {
    width: 60%;
    margin: 0 20%;
  }
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

const motionProps = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: 'spring',
    stiffness: 40,
  },
};

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
    return <p>Authenticating...</p>;
  }

  if (authStatus === 'rejected') {
    return <p>Something went wrong...</p>;
  }

  return (
    <Wrapper>
      <motion.div {...motionProps}>
        <Heading>Statistify</Heading>
        <p>
          Have you ever wondered who is your the most listened artist on Spotify?
          <span role="img" aria-label="happy-emoji">
            😄
          </span>
          Do you know which song is your favourite? It's easy. Log in with your Spotify account and
          check! Statistify is only using user-read-recently-played and user-top-read scopes, so you
          don't need to worry about your account!
        </p>
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT}&scope=user-read-recently-played%20user-top-read&state=34fFs29kd09`}
        >
          <Button>Sign in with Spotify</Button>
        </a>
      </motion.div>
    </Wrapper>
  );
};

export default Login;
