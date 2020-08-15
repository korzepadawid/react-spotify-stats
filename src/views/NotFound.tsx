import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading/Heading';
import NotFoundSvg from '../assets/NotFound.svg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Illustration = styled.div`
  margin-top: 30px;
  width: 300px;
  height: 300px;
  background-image: url(${NotFoundSvg});
  background-position: 50% 50%;
  background-size: 100%;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;

const NotFound = () => (
  <Wrapper>
    <Heading>Something went wrong...</Heading>
    <Illustration />
    <Link to="/">
      <Heading>Go back.</Heading>
    </Link>
  </Wrapper>
);

export default NotFound;
