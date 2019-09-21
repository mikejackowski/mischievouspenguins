import React from 'react';
import * as Styled from './callToAction.styles';

type OwnProps = {
  handleSubmit: () => void;
};

const CallToAction = (props: OwnProps) => (
  <Styled.CallToActionWrapper>
    <Styled.CallToActionHeader>
      ready to apply?
    </Styled.CallToActionHeader>
    <Styled.CallToActionButton
      onClick={() => props.handleSubmit()}>
      Proceed to application form
    </Styled.CallToActionButton>
  </Styled.CallToActionWrapper>
)

export default CallToAction;