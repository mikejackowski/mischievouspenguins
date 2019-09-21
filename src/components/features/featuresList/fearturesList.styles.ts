import styled from 'styled-components';
import { vars, colors } from '../../common/variables';
import { Props, changeColor } from '../../common/styles';
import { lighten } from 'polished';

export const FeaturesListWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: ${vars.boxShadow};
`
export const FeatureThumbnail = styled.div<Props>`
  display: grid;
  padding: 5%;
  border-bottom: 1px solid ${colors.border};
  animation: ${props => props.selected ? changeColor('transparent', lighten(0.35, colors.action)) : ''} 0.3s;
  background-color: ${props => props.selected ? lighten(0.35, colors.action) : 'transparent'};
  &:last-child {
    border-bottom: none;
  }
  `

export const FeatureThumbnailTitle = styled.div<Props>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  padding: 2% 0;
  color: ${props => props.selected ? colors.theme : 'initial'}
`

export const FeatureThumbnailText = styled.div<Props>`
  font-size: 1rem;
  color: ${props => props.selected ? '#000' : colors.grey}
`