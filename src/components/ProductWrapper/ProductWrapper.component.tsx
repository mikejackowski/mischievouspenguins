import React from 'react';
import * as Styled from './productWrapper.styles';

const ProductWrapper = (props: any) => (
  <Styled.ProductWrapper>
    {props.children}
  </Styled.ProductWrapper>
)

export default ProductWrapper;
