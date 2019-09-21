import styled from 'styled-components';
import { colors, vars } from '../common/variables';

export const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  padding: 1rem;
  background: white;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 1px rgba(0, 0, 0, 0.6), 0 0 5px rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

export const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
  padding: 10px;
`

export const Burger = styled.div`
  font-size: ${vars.fontXl};
  justify-self: end;
  align-self: center;
  color: ${colors.theme};
`
export const MobileWrapper = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  width: 100%;

  @media (min-width: 700px) {
    display: none;
  }
`

export const DesktopWrapper = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`
export const NavButtonsWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
`

export const NavButton = styled.div`
  display: grid;
  width: 100%;
  min-width: 100px;
  height: 100%;
  padding: 2%;
  place-items: center;
  cursor: pointer;

  border-right: 1px solid ${colors.border};

  &:last-child {
    border-right: none;
  }

  &:hover {
    color: ${colors.theme};
    font-weight: bold;
  }
`

export const BuyButton = styled.div`
  display: grid;
`
