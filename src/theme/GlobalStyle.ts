import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    background-color: #FDFDFD;
  }
  a {
    text-decoration: none;
  }
`;
