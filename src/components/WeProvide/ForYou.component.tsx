import React from 'react';
import * as Styled from './ForYou.styles';

type OwnProps = {};

const ForYou = (props: OwnProps) => (
  <Styled.ForYouWrapper>
    <Styled.ForYouHeader>What's in it for you?</Styled.ForYouHeader>
    <Styled.ForYouList>
      <Styled.ForYouItem>
        <Styled.ForYouItemTitle>
          Growth
        </Styled.ForYouItemTitle>
        <Styled.ForYouItemText>
          user and revenue growth that will N-x your business at early stage
        </Styled.ForYouItemText>
      </Styled.ForYouItem>
      <Styled.ForYouItem>
        <Styled.ForYouItemTitle>
          Services
        </Styled.ForYouItemTitle>
        <Styled.ForYouItemText>
          services, resources and content worth thousands for a fraction of a price
        </Styled.ForYouItemText>
      </Styled.ForYouItem>
      <Styled.ForYouItem>
        <Styled.ForYouItemTitle>
          Value
        </Styled.ForYouItemTitle>
        <Styled.ForYouItemText>
          processes, content, drip campaigns, onboarding sequences, sm graphics, backlinks, guest posts, SEO, DA
        </Styled.ForYouItemText>
      </Styled.ForYouItem>
      <Styled.ForYouItem>
        <Styled.ForYouItemTitle>
          Access
        </Styled.ForYouItemTitle>
        <Styled.ForYouItemText>
          connections, know-how, mentorship, opportunities, support
        </Styled.ForYouItemText>
      </Styled.ForYouItem>
    </Styled.ForYouList>
  </Styled.ForYouWrapper>
);

export default ForYou;