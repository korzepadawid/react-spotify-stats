import React from 'react';
import Heading from '../components/Heading/Heading';
import TimeRangeMenu from '../components/TimeRangeMenu/TimeRangeMenu';
import Navigation from '../components/Navigation/Navigation';
import useAppState from '../hooks/useAppState';
import useSpotifyData from '../hooks/useSpotifyData';
import List from '../components/List/List';

const Artists = () => {
  const { timeRange } = useAppState();
  const { items, status } = useSpotifyData(
    `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=${timeRange.artists}`,
  );
  return (
    <div>
      <Navigation />
      <Heading as="h1">Top artists</Heading>
      <TimeRangeMenu />
      <List items={items} status={status} />
    </div>
  );
};

export default Artists;
