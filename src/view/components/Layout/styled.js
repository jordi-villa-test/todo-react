import styled from 'styled-components';
import { breakpoints } from 'src/constants';

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    max-width: 960px;
    align-items: center;
    justify-content: center;
  }
`;

export default Layout;
