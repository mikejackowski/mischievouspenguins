import React from 'react';
import * as Styled from './list.styles';

const List = (props: any) => (
  <Styled.List>
    {props.children}
  </Styled.List>
);

export default List;
