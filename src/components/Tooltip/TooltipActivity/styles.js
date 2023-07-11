import styled from 'styled-components';

export const TooltipContainer = styled.div`export 
  display: flex;
  flex-direction: column;
`;

export const TooltipLine = styled.p`
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  margin: 0;
  padding: 0.5rem;
  background-color: ${({ color }) => color};
`;

