import styled from 'styled-components';
import { breakpoints } from 'src/constants';

const Layout = styled.div`
  background: white;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    max-width: 800px;
    height: auto;
    max-height: 960px;
    margin-top: 96px;
    min-height: 0px;
    border-radius: 10px;
    box-shadow: rgb(209 230 255 / 57%) 0px 2px 24px 1px;
  }
`;

export default Layout;
