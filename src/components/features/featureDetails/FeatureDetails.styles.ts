import styled from 'styled-components';
import { vars } from '../../common/variables';

export const FeatureDetailsWrapper = styled.div`
  display: grid;
  grid-row-gap: 1%;
  grid-template-rows: 1fr auto;
`;

export const FeatureDetailsText = styled.div`
  font-size: ${vars.fontXl};
  text-transform: uppercase;
`

export const FeatureDetailsImgWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 1em;
`
export const FeatureDetailsImage = styled.img`
`

