import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Item from '../Item/Item';
import { getPathname } from '../../utils';
import Loader from '../Loader/Loader';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const motionProps = {
  initial: { y: 150, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: 'spring',
    stiffness: 40,
  },
};

interface Props {
  items: any[];
  status: string;
}

const List = ({ items, status }: Props) => {
  const artists = getPathname() === 'artists';

  if (status === 'idle' || status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <p>Something went wrong...</p>;
  }

  return (
    <Wrapper>
      {items.length === 0 && status === 'resolved' && <p>There is no data to show...</p>}
      <motion.div {...motionProps}>
        {items.map((item: any, index: number) => (
          <Item
            key={index}
            index={index + 1}
            spotifyURL={item.external_urls.spotify}
            imageURL={artists ? item.images[0].url : item.album.images[0].url}
            artist={artists ? item.name : item.artists[0].name}
            details={artists ? item.genres[0] : item.name}
          />
        ))}
      </motion.div>
    </Wrapper>
  );
};

export default List;
