import styled from 'styled-components';
import { breakpoints } from 'src/constants';

export const Wrapper = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  background: #f5faff;

  @media ${breakpoints.desktop} {
    max-height: 600px;
  }
`;

export const Content = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  width: 100%;
  min-height: 70px;
`;

export const EmptyText = styled.span`
  color: #888;
  font-size: 18px;
`;
