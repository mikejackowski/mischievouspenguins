import styled from 'styled-components';
import { colors, vars } from '../common/variables';

export const CountdownStyles = styled.p`
  font-size: ${vars.fontXxl};
  color: ${colors.black};
  font-weight: bold;
`
export const CountdownWrapper = styled.div`
  display: grid;
  text-transform: uppercase;
  color: ${colors.theme};
  letter-spacing: 0.05em;
  place-items: center;
  font-size: ${vars.fontXxl};
  font-weight: bold;
`