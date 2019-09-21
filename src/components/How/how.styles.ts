import styled from 'styled-components';

export interface Props {
  bold?: boolean;
  rows?: number
  uppercase?: boolean;
  underscore?: boolean;
}

export const HowBackgroundWrapper = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  margin-top: 5%;
  justify-content: center;
  background: rgba(242, 242, 242, 0.9);
`

export const HowWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  padding: 5%;
`
