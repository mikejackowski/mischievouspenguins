import styled from 'styled-components';
import { colors, vars } from '../common/variables';


export const CloseFormNavBarWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: flex-end;
  padding: 1rem;
  background: white;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(0, 0, 0, 0.6), 0 0 5px rgba(0, 0, 0, 0.6);
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  place-items: center;
  color: ${colors.theme};
  font-size: ${vars.fontXxl};
  height: fit-content;
  width: 50px;
  z-index: 10;
`