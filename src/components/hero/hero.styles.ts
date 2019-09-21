import styled from 'styled-components';
import { colors, vars } from '../common/variables';
import { lighten } from 'polished';

export const HeroWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-column-gap: 1%;
  grid-template-columns: 1fr 1fr;
  padding: 1%;
  background: transparent;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionButton = styled.div`
  display: grid;
  width: 100%;
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


export const HeroContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
  padding: 1%;
`

export const HeroHeader = styled.h1`
  font-size: ${vars.fontXxl}
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: ${colors.white};
`

export const HeroSubheader = styled.h5`
  font-size: ${vars.fontL};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${colors.white};
`

export const InputWrapper = styled.div`
  display: grid;
  width: 100%;
  align-content: baseline;
`
