import React from 'react';
import * as Styled from './terms.styles';
import * as Common from '../common/styles';

type OwnProps = {};

const Terms = (props: OwnProps) => (
  <Styled.TermsWrapper>
    <Common.Header>
      Terms and conditions
    </Common.Header>
    <Styled.Terms>
      <Common.Par>As a founder, if you hire a marketing agency, a freelancer or even a full-time employee you will often feel disappointed.</Common.Par>
      <Common.Par uppercase={true} spacing={0.05}>Why?</Common.Par>
      <Common.Par>You will quickly notice that they are not as committed as you are.</Common.Par>
      <Common.Par uppercase={true} spacing={0.05}>We want to do something different here!</Common.Par>
      <Styled.TermsList>
        <Styled.TermListItem>We will do <Common.Par bold={true} spacing={0.02}>whatever it takes</Common.Par> to grow your business as much as possible</Styled.TermListItem>
        <Styled.TermListItem>Since <Common.Par italic={true}>‘great things take time to grow’</Common.Par> – we will be helping you for one year. </Styled.TermListItem>
        <Styled.TermListItem>You only pay when you get the results – and only <Common.Par bold={true} spacing={0.02}>from</Common.Par> the added revenue </Styled.TermListItem>
        <Styled.TermListItem><Common.Par bold={true} spacing={0.02}>Risk-free</Common.Par> investment – you don’t need to relinquish equity for financial help that doesn’t mean you will actually grow your business! We will only ask you for equity when we hit pre-agreed revenue targets – and based on how big the milestones we achieve are! </Styled.TermListItem>
      </Styled.TermsList>
    </Styled.Terms>
  </Styled.TermsWrapper>
)

export default Terms;