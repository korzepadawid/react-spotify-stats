import React from 'react';
import Heading from '../components/Heading/Heading';
import TimeRangeMenu from '../components/TimeRangeMenu/TimeRangeMenu';
import Navigation from '../components/Navigation/Navigation';
import List from '../components/List/List';

const Artists = () => (
  <div>
    <Navigation />
    <Heading as="h1">Top artists</Heading>
    <TimeRangeMenu />
    <List />
  </div>
);

export default Artists;
