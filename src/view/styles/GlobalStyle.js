import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Open Sans', sans-serif;
    background: #d6e6fc;
  }
`;

export default GlobalStyle;
