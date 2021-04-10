import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: #f2f8ff;
  }
`;

export default GlobalStyle;
