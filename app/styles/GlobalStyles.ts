import { createGlobalStyle } from 'styled-components';

import colors from './mainTheme';

const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  body, p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: ${colors.aquaHaze};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.geyser};
    border-radius: 4px;
  }
`;

export default GlobalStyles;
