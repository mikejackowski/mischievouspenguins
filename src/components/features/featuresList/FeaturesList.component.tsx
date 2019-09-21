import React from 'react';
import * as Styled from './fearturesList.styles';

import { featuresCopy } from '../../common/text';
import FeatureThumbnail from '../featureThumbnail/FeatureThumbnail.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IFeature {
  visibility: boolean,
  toggle: () => void
};

type OwnProps = {
  management: IFeature,
  invoicing: IFeature,
  feature3: IFeature,
  feature4: IFeature,
};

const FeaturesList = (props: OwnProps) => {
  return (
    <Styled.FeaturesListWrapper>
      <FeatureThumbnail
        visibility={props.management.visibility}
        onFeatureClick={props.management.toggle}
        text={featuresCopy.management.text}
        title={featuresCopy.management.title}
      />
      <FeatureThumbnail
        visibility={props.invoicing.visibility}
        onFeatureClick={props.invoicing.toggle}
        text={featuresCopy.invoicing.text}
        title={featuresCopy.invoicing.title}
      />
      <FeatureThumbnail
        visibility={props.feature3.visibility}
        onFeatureClick={props.feature3.toggle}
        text={featuresCopy.minions.text}
        title={featuresCopy.minions.title}
      />
      <FeatureThumbnail
        visibility={props.feature4.visibility}
        onFeatureClick={props.feature4.toggle}
        text={featuresCopy.system.text}
        title={featuresCopy.system.title}
      />
    </Styled.FeaturesListWrapper>
  )
}

export default FeaturesList;