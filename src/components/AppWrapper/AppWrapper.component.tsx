import React from 'react';
import * as Styled from './appWrapper.styles';

const AppWrapper = (props: any) => (
  <Styled.AppWrapper>
    {props.children}
  </Styled.AppWrapper>
)

export default AppWrapper;
