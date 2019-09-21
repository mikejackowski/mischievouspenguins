import React from 'react';
import * as Styled from './closeFormNavBar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type OwnProps = {
  onClose: () => void;
}

const CloseFormNavBar = (props: OwnProps) => (
  <Styled.CloseFormNavBarWrapper>
    <Styled.IconWrapper onClick={() => props.onClose()}>
      <FontAwesomeIcon icon="times-circle"/>
    </Styled.IconWrapper>
  </Styled.CloseFormNavBarWrapper>
)

export default CloseFormNavBar;