import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Open Sans', sans-serif;
    background: #f2f8ff;
  }
`;

export default GlobalStyle;
