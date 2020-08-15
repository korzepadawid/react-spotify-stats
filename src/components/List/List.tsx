import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { motion } from 'framer-motion';
import useSpotifyData from '../../hooks/useSpotifyData';
import Item from '../Item/Item';
import { getPathname } from '../../utils';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const StyledSpin = styled(Spin)`
  width: 100%;
  margin-top: 80px;

  .ant-spin-dot-item {
    background-color: ${({ theme }) => theme.grey.main};
  }
`;

const motionProps = {
  initial: { y: 150, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: 'spring',
    stiffness: 40,
  },
};

const List = () => {
  const { items, status } = useSpotifyData();
  const artists = getPathname() === 'artists';

  if (status === 'idle' || status === 'pending') {
    return <StyledSpin />;
  }

  if (status === 'rejected') {
    return <p>Something went wrong...</p>;
  }

  return (
    <Wrapper>
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
