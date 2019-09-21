import React from 'react';
import * as Styled from './step.styles';

type OwnProps = {
  title: string;
  text: string;
  stepIconName: string;
}

const Step = (props: OwnProps) => (
  <Styled.StepWrapper>
    <Styled.StepTitle>
      {props.title}
    </Styled.StepTitle>
    <Styled.StepText>
      {props.text}
    </Styled.StepText>
  </Styled.StepWrapper>
);

export default Step;