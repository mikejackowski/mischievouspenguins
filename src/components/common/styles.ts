import styled, { keyframes } from 'styled-components';
import { colors, vars } from './variables';
import { lighten, darken } from 'polished';

export interface Props {
  selected?: boolean;
  backgroundImg?: string;
}

interface Par {
  bold?: boolean;
  uppercase?: boolean;
  underscore?: boolean;
  spacing?: number;
  italic?: boolean;
}

export const changeColor = (initial: string, final: string) => keyframes`
  from {
    background-color: ${initial};
  }

  to {
    background-color: ${final};
  }
`;

export const Par = styled.p<Par>`
  margin: 0;
  display: inline;
  font-weight: ${props => props.bold ? 'bold' : 'initial'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'initial'};
  letter-spacing: ${props => props.spacing ? `${(props.spacing)}em` : 'initial'};
  text-decoration: ${props => props.underscore ? 'underline' : 'none'};
  font-style: ${props => props.italic ? 'italic' : 'normal'};
`

export const Link = styled.a`
  display: grid;
  width: 100%;
  height: 100%;
  color: ${colors.white};
  cursor: pointer;
  text-decoration: none;
  place-items: center;

  &:hover {
    color: ${colors.theme};
    font-weight: semi-bold;
  }
`

export const CenteredDiv = styled.div`
  display: grid;
  width: fit-content;
  height: 100%;
  place-items: center;
`

export const Header = styled.div`
  display: grid;
  font-weight: bold;
  font-size: ${vars.fontXxl};
  color: ${colors.theme};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

export const ActionButton = styled.div`
  display: grid;
  width: 100%;
  min-width: 150px;
  max-width: 200px;
  height: fit-content;
  padding: 5px;
  margin: auto 5px;
  place-items: center;
  justify-self: center;
  letter-spacing: 0.05em;
  align-self: center;
  border-radius: 35px;
  background: ${colors.action};
  color: ${colors.white};
  font-weight: bold;
  font-size: ${vars.fontXxl};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.05, colors.action)};
  }

  @media (max-width: 700px) {
    width: 150px;
  }
`

export const ImgWrapper = styled.img`
  width: 100%;
  padding: 2%;
  box-shadow: ${vars.boxShadow};
`

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: fit-content;
  line-height: 2.5rem;
  padding-left: 2%;
  margin: 0 2%;
  font-size: ${vars.fontM};
  background: transparent;
  color: ${colors.white};
  border-bottom: 1px solid ${colors.border};
  touch-action: manipulation;
  cursor: pointer;
  border-left: none;
  border-top: none;
  border-right: none;

  ::placeholder {
    border: none;
    font-size: ${vars.fontM};
    color: ${darken(0.15, colors.white)};
    font-style: italic;
  }

  &:hover {
    outline: none;
    border-bottom: 1px solid ${colors.border};
  }

  &:active {
    outline: none;
    border-bottom: 1px solid ${colors.border};
  }
`

export const InputButton = styled.input`
  display: inline-block;
  width: 100%;
  margin-top: 1%;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  background-color: ${colors.action};
  color: ${colors.white};
  font-weight: bold;
  font-size: ${vars.fontM};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.05, colors.action)};
  }
`

export const BlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 250px; /* to be changed */
  background-color: ${colors.blockWrapper};
`

export const MobileWrapper = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`

export const DesktopWrapper = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`

