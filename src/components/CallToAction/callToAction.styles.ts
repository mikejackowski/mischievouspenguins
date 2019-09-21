import styled from 'styled-components';
import ctabg from '../../assets/ctabg.svg';
import { colors, vars } from '../common/variables';
import { lighten } from 'polished';

export const CallToActionWrapper = styled.div`
  display: grid;
  justify-self: center;
  padding: 5%;
  width: 100%;
  height: 100%;
  background-image: url(${ctabg});
`

export const CallToActionHeader = styled.h1`
  font-size: ${vars.fontXxl};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${colors.white};
`

export const CallToActionButton = styled.div`
  display: grid;
  width: 50%;
  height: 90px;
  padding: 5px;
  margin: auto 5px;
  place-items: center;
  justify-self: center;
  align-self: center;
  letter-spacing: 0.05em;
  border-radius: 50px;
  background: ${colors.action};
  color: ${colors.white};
  font-weight: bold;
  font-size: ${vars.fontXl};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.05, colors.action)};
  }

  @media (max-width: 700px) {
    width: 150px;
  }
`
