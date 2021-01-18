import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyles;
