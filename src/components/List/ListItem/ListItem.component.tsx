import React from 'react';
import * as Styled from './listItem.styles';

const ListItem = (props: any) => (
  <Styled.Item>
    {props.children}
  </Styled.Item>
);

export default ListItem;
