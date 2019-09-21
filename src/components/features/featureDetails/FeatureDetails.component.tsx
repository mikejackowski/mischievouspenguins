import React from 'react';
import * as Styled from './FeatureDetails.styles';
import { ReactComponent as FeatureImg} from '../../common/stolensvg.svg';

type OwnProps = {
  text: string;
};

const FeatureDetails = (props: OwnProps) => {
  return (
    <Styled.FeatureDetailsWrapper>
      <FeatureImg/>
      <Styled.FeatureDetailsText>{props.text}</Styled.FeatureDetailsText>
    </Styled.FeatureDetailsWrapper>
  )
}

export default FeatureDetails;