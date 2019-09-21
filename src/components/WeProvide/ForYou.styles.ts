import styled from 'styled-components';
import { colors } from '../common/variables';
import profitsbg from '../common/profitsbg.svg';
export const ForYouWrapper = styled.div`
  display: grid;
  grid-row-gap: 2%;
  grid-template-rows: 1fr 2fr;
  width: 100%;
  height: 100%;
  background-image: url(${profitsbg});
  margin: 0 0 20px 0;
  padding: 0 10px;
`

export const ForYouHeader = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 3rem;
  color: ${colors.white};
`

export const ForYouList = styled.div`
  display: grid;
  grid-column-gap: 1%;
  grid-template-columns: auto auto auto;
  width: 100%;
  height: 100%;
  place-items: center;
`

export const ForYouItem = styled.div`
  display: grid;
  width: 50%;
  height: fit-content;
  padding: 5px;
  margin: 5px;
  place-items: center;
  grid-row-gap: 20px;
  grid-template-rows: 1fr 3fr;
`

export const ForYouItemTitle = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${colors.white};
`

export const ForYouItemText = styled.div`
  display: flex;
  align-self: flex-start;
  color: ${colors.white};
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  text-align: center;
`
