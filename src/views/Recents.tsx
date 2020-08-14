import React from 'react';
import Heading from '../components/Heading/Heading';
import Navigation from '../components/Navigation/Navigation';
import List from '../components/List/List';

const Recents = () => (
  <div>
    <Navigation />
    <Heading as="h1">Recently played</Heading>
    <List />
  </div>
);

export default Recents;
