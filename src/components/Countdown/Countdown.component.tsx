import React from 'react';
import Countdown from 'react-countdown-now';
import * as Styled from './countdown.styles';

const CountdownWrapper = () => (
  <Styled.CountdownWrapper>
    Applications close in:
    <Styled.CountdownStyles>
      <Countdown date={'Mon, 14 Oct 2019 23:59:59'}/>
    </Styled.CountdownStyles>
  </Styled.CountdownWrapper>
)

export default CountdownWrapper;