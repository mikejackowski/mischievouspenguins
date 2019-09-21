import React, { useState } from 'react';
import * as Styled from './features.styles';
import FeaturesList from './featuresList/FeaturesList.component';
import FeatureDetails from './featureDetails/FeatureDetails.component';
import { featuresCopy } from '../common/text';

type OwnProps = {
};

const Feature = (props: OwnProps) => {

  const [features, setValue] = useState({
    management: true,
    invoicing: false,
    feature3: false,
    feature4: false,
  })

  const showManagement = () => {
    setValue({
      management: true,
      invoicing: false,
      feature3: false,
      feature4: false,
    });
  }

  const showInvoicing = () => {
    setValue({
      management: false,
      invoicing: true,
      feature3: false,
      feature4: false,
    });
  }

  const showFeature3 = () => {
    setValue({
      management: false,
      invoicing: false,
      feature3: true,
      feature4: false,
    });
  }

  const showFeature4 = () => {
    setValue({
      management: false,
      invoicing: false,
      feature3: false,
      feature4: true,
    });
  }

  const management = {
    visibility: features.management,
    toggle: showManagement
  }

  const invoicing = {
    visibility: features.invoicing,
    toggle: showInvoicing
  }

  const feature3 = {
    visibility: features.feature3,
    toggle: showFeature3
  }

  const feature4 = {
    visibility: features.feature4,
    toggle: showFeature4
  }

  return (
    <Styled.FeaturesWrapper>
      <FeaturesList
        management={management}
        invoicing={invoicing}
        feature3={feature3}
        feature4={feature4}/>
        {features.management && <FeatureDetails text={featuresCopy.management.text}/>}
        {features.invoicing && <FeatureDetails text={featuresCopy.invoicing.text}/>}
        {features.feature3 && <FeatureDetails text={featuresCopy.minions.text}/>}
        {features.feature4 && <FeatureDetails text={featuresCopy.system.text}/>}
    </Styled.FeaturesWrapper>
  )
}

export default Feature;