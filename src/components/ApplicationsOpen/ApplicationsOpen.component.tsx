import React from 'react';
import * as Styled from './applicationsOpen.styles';
import * as Common from '../common/styles';
import europe from '../common/europe.svg'
import deadline from '../common/deadline.svg';
import startup from '../common/startup.svg';
import start from '../common/start.svg';

const ApplicationsOpen = () => (
  <Styled.ApplicationsOpenWrapper>
    <Common.Header>
      Who?
    </Common.Header>
    <Styled.ApplicationsListWrapper>
      <Styled.ApplicationsConditionWrapper
        backgroundImg={startup}>
        <Styled.ApplicationsConditionHeader>
          Early stage startup
        </Styled.ApplicationsConditionHeader>
        <Styled.ApplicationsConditionText>
          <div style={{display: 'grid', gridTemplateRows: '1fr 1fr'}}>
            <div>SaaS businesses, marketing tools (preferably for SMBs)</div><div style={{ textAlign: "right"}}>$2,500 – $10,000 MRR</div>
          </div>
        </Styled.ApplicationsConditionText>
      </Styled.ApplicationsConditionWrapper>
      <Styled.ApplicationsConditionWrapper
        backgroundImg={europe}>
        <Styled.ApplicationsConditionHeader>
          Location
        </Styled.ApplicationsConditionHeader>
        <Styled.ApplicationsConditionText>
          <p style={{padding: '5px 10px 0 0'}}>Europe</p>
        </Styled.ApplicationsConditionText>
      </Styled.ApplicationsConditionWrapper>
      <Styled.ApplicationsConditionWrapper
        backgroundImg={deadline}>
        <Styled.ApplicationsConditionHeader>
          Deadline for applications
        </Styled.ApplicationsConditionHeader>
        <Styled.ApplicationsConditionText>
          <p style={{padding: '5px 10px 0 0'}}>14 October 2019</p>
        </Styled.ApplicationsConditionText>
      </Styled.ApplicationsConditionWrapper>
      <Styled.ApplicationsConditionWrapper
        backgroundImg={start}>
        <Styled.ApplicationsConditionHeader>
          Start
        </Styled.ApplicationsConditionHeader>
        <Styled.ApplicationsConditionText>
          <p style={{padding: '5px 10px 0 0'}}>11 November 2019</p>
        </Styled.ApplicationsConditionText>
      </Styled.ApplicationsConditionWrapper>
    </Styled.ApplicationsListWrapper>
  </Styled.ApplicationsOpenWrapper>
);

export default ApplicationsOpen;