import styled from 'styled-components';
import { colors } from '../common/variables';

interface Props {
  align?: 'left' | 'right'
};

export const TimelineBackgroundWrapper = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  margin-top: 5;
  justify-content: center;
  background: rgba(242, 242, 242, 0.9);
`

export const TimelineWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  padding: 5% 5% 5% 0;
`;

export const TimelineStepsWrapper = styled.div`
  display: grid;
  width: 100%;
`

export const TimeLineItem = styled.div<Props>`
  position: relative;
  width: 50%;
  height: fit-content;
  display: flex;
  padding: 2rem;
  justify-self: ${props => props.align === 'left' ? 'baseline' : 'end'};
  z-index: 10;
`

export const TimelineItemText = styled.div`
  font-size: 1.7rem;
  padding: 1rem;
  color: ${colors.grey};
`

export const TimelineImgWrapper = styled.div`
  position: absolute;
  bottom: -3rem;
  right: 50%;
  opacity: 0.5;
  z-index: 1;
`