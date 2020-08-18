import React from 'react';
import Heading from '../components/Heading/Heading';
import Navigation from '../components/Navigation/Navigation';
import List from '../components/List/List';
import useSpotifyData from '../hooks/useSpotifyData';

const Recents = () => {
  const { items, status } = useSpotifyData(
    'https://api.spotify.com/v1/me/player/recently-played?limit=50',
  );
  return (
    <div>
      <Navigation />
      <Heading as="h1">Recently played</Heading>
      <List items={items} status={status} />
    </div>
  );
};

export default Recents;
