import styled from 'styled-components';
import Button from 'src/view/components/Button';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  padding-left: 32px;
  min-height: 70px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #e0efff;
  }
`;

export const Check = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  border: 2px solid #0184e8;
  border-radius: 50px;
  cursor: pointer;
`;

export const CompletedCheck = styled(Check)`
  background: rgba(1, 132, 232, 0.6);
`;

export const Title = styled.span`
  font-weight: 16px;
`;

export const CompletedTitle = styled(Title)`
  text-decoration: line-through;
  color: #888;
`;

export const Controls = styled.div`
  margin-left: auto;
`;

export const ControlButton = styled(Button)`
  margin-left: 16px;
  padding: 8px;
  min-height: 0;
  z-index: 2;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const RemoveButton = styled(ControlButton)`
  background: #e25141;
`;

export const EditButton = styled(ControlButton)`
  background: #ff9800;
`;
