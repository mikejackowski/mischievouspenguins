import styled from 'styled-components';
import arrowr from '../common/arrowr.svg';

export const List = styled.ul`
  display: grid;
  list-style-image: url(${arrowr});
  list-style-position: inside;
  grid-row-gap: 15px;
`

