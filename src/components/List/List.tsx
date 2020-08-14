import React from 'react';
import styled from 'styled-components';
import useSpotifyData from '../../hooks/useSpotifyData';
import Item from '../Item/Item';
import { getPathname } from '../../utils';
import { Spin } from 'antd';

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

const List = () => {
  const { items, isLoading, isError } = useSpotifyData();
  const artists = getPathname() === 'artists';

  if (isLoading) {
    return <StyledSpin />;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default List;
