import React from 'react';
import * as Styled from './navbar.styles';
import * as StyledCommon from '../common/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type OwnProps = {
  handleSubmit: () => void;
};


const Navbar = (props: OwnProps) => {
  return (
    <Styled.NavbarWrapper>
      <StyledCommon.CenteredDiv>
        <StyledCommon.Link href="http://localhost:3000/">
          <Styled.Logo src="https://uploads.divjoy.com/logo.svg"/>
        </StyledCommon.Link>
      </StyledCommon.CenteredDiv>
      <StyledCommon.CenteredDiv>
        <Styled.DesktopWrapper>
          <Styled.NavButtonsWrapper>
            <StyledCommon.ActionButton
              onClick={props.handleSubmit}>
              try
            </StyledCommon.ActionButton>
            <Styled.NavButton>
              features
            </Styled.NavButton>
            <Styled.NavButton>
              pricing
            </Styled.NavButton>
            <Styled.NavButton>
              about
            </Styled.NavButton>
          </Styled.NavButtonsWrapper>
        </Styled.DesktopWrapper>
      </StyledCommon.CenteredDiv>
      <Styled.MobileWrapper>
        <StyledCommon.ActionButton
          onClick={props.handleSubmit}>
          try
        </StyledCommon.ActionButton>
        <Styled.Burger>
          <FontAwesomeIcon icon='bars' />
        </Styled.Burger>
      </Styled.MobileWrapper>
    </Styled.NavbarWrapper>
  )
}

export default Navbar;