import React from 'react';
import * as Styled from './featureThumbnail.styles';

type OwnProps = {
  onFeatureClick: () => void
  visibility: boolean;
  text: string;
  title: string;
};

const FeatureThumbnail = (props: OwnProps) => {
  return (
    <Styled.FeatureThumbnail
      selected={props.visibility}
      onClick={props.onFeatureClick}>
      <Styled.FeatureThumbnailTitle
        selected={props.visibility}>
        {props.title}
      </Styled.FeatureThumbnailTitle>
      <Styled.FeatureThumbnailText
        selected={props.visibility}>
        {props.text}
      </Styled.FeatureThumbnailText>
    </Styled.FeatureThumbnail>
  )
}

export default FeatureThumbnail;