import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyle } from '../theme/GlobalStyle';

const Container = styled.div`
  width: 88vw;
  margin: 0 6vw;
  padding-bottom: 65px;

  @media (min-width: 768px) {
    width: 60vw;
    margin: 0 20vw;
    background-color: ${({ theme }) => theme.secondary};
    min-height: 100vh;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.06);
    padding: 20px;
  }
`;

interface Props {
  children: ReactNode;
}

const MainTemplate = ({ children }: Props) => {
  if (typeof console === 'object') {
    console.log(
      `I know you are looking for unwanted console.log's but, you won't find anything here.😁 Anyway have a nice day!👋 Don't forget to visit my portfolio!`,
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>{children}</Container>
      </>
    </ThemeProvider>
  );
};

export default MainTemplate;
