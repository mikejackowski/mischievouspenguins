import styled from 'styled-components';
import { colors, vars } from '../common/variables';
import { Props } from '../common/styles';

export const ApplicationsOpenWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 10% 1% 0 1%;
  grid-template-rows: auto 1fr;
  grid-row-gap: 1%;
`
export const ApplicationsOpenText = styled.div`
  display: grid;
`

export const ApplicationsListWrapper = styled.div`
  display: grid;
  grid-row-gap: 1%;
  grid-template-rows: repeat(4, 1fr);
`

export const ApplicationsConditionWrapper = styled.div<Props>`
  display: flex;
  width: 100%;
  padding: 3%;
  align-items: center;
  justify-content: space-between;
  background-image: url('${props => props.backgroundImg ? (props.backgroundImg) : ''}');
  background-repeat: no-repeat;
  background-size: 150px;
  background-position: 97%;
  border-bottom: 2px solid ${colors.border};

  &:last-child {
    border-bottom: none;
  }
`

export const ApplicationsConditionHeader = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: ${vars.fontXl};
  color: ${colors.black};
`

export const ApplicationsConditionText = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.black};
  font-size: ${vars.fontL};
`
