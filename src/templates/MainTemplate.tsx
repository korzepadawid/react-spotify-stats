import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyle } from '../theme/GlobalStyle';

const Container = styled.div`
  width: 88vw;
  margin: 0 6vw;

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
