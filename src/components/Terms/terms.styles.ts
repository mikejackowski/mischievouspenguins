import styled from 'styled-components';
import { colors, vars } from '../common/variables';

export const TermsWrapper = styled.div`
  display: grid;
  margin-top: 5%;
  grid-template-rows: 1fr auto;
`;

export const Terms = styled.div`
  display: grid;
  grid-row-gap: 20px;
  padding: 1em;
  font-size: ${vars.fontL};
  color: ${colors.black};
  margin: 0;
`

export const TermsList = styled.ol`
  display: grid;
  grid-row-gap: 3rem;
  list-style-position: inside;
  list-style: none;
  counter-reset: my-awesome-counter;
  margin: 0 !important;
`
export const TermListItem = styled.li`
  counter-increment: my-awesome-counter;
  position: relative;
  display: list-item;
  font-size: ${vars.fontL};
  padding: 15px 30px;
  color: ${colors.black};

  &::before {
    position: absolute;
    top: 10%;
    left: -3%;
    font-size: ${vars.fontXxl};
    content: counter(my-awesome-counter);
    color: ${colors.grey};
    font-weight: bold;
    opacity: 0.3;
  }
`
