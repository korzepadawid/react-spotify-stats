import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading/Heading';
import QuestionMarkImage from '../../assets/QuestionMark.png';

const Wrapper = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 63px;
  margin-bottom: 35px;

  &:last-child {
    margin-bottom: 100px;
    @media (min-width: 768px) {
      margin-bottom: 35px;
    }
  }

  span {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 500;
    color: ${({ theme }) => theme.grey.dark};
  }
`;

interface ItemPreviewProps {
  image: string;
}

const ItemPreview = styled.div<ItemPreviewProps>`
  min-width: 63px;
  min-height: 63px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Details = styled.div`
  padding-left: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
`;

const Index = styled.span`
  height: 80px;
  width: 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface Props {
  index?: number;
  imageURL?: string;
  spotifyURL?: string;
  details?: string;
  artist?: string;
}

const Item = ({
  index = 0,
  imageURL = QuestionMarkImage,
  spotifyURL = 'https://open.spotify.com/',
  details = 'unknown',
  artist = 'Anonymous',
}: Props) => (
  <Wrapper href={spotifyURL} target="_blank">
    <Index>{index}</Index>
    <ItemPreview image={imageURL} />
    <Details>
      <span>{details}</span>
      <Heading small as="h2">
        {artist}
      </Heading>
    </Details>
  </Wrapper>
);

export default Item;
