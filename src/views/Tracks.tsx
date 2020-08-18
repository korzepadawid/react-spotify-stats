import React from 'react';
import Heading from '../components/Heading/Heading';
import TimeRangeMenu from '../components/TimeRangeMenu/TimeRangeMenu';
import Navigation from '../components/Navigation/Navigation';
import List from '../components/List/List';
import useSpotifyData from '../hooks/useSpotifyData';
import useAppState from '../hooks/useAppState';

const Tracks = () => {
  const { timeRange } = useAppState();
  const { items, status } = useSpotifyData(
    `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=${timeRange.tracks}`,
  );
  return (
    <div>
      <Navigation />
      <Heading as="h1">Top tracks</Heading>
      <TimeRangeMenu />
      <List items={items} status={status} />
    </div>
  );
};

export default Tracks;
