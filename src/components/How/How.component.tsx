import React from 'react';

import * as Styled from './how.styles';
import * as Common from '../common/styles';
import ListItem from '../List/ListItem/ListItem.component';
import List from '../List/List.component';

type OwnProps = {};

const How = (props: OwnProps) => {
  return (
    <Styled.HowBackgroundWrapper>
      <Styled.HowWrapper>
        <Common.Header>How does it work?</Common.Header>
        <List
          rows={6}>
          <ListItem>
            <Common.Par spacing={0.03} bold={true}>You become a part of the programme together with 5 other <Common.Par spacing={0.03} bold={true} italic={true}>similar</Common.Par> startups</Common.Par>
          </ListItem>
          <ListItem>
              <Common.Par>
                This provides all of the startups in the acceleration programme mutual benefits:
              </Common.Par>
            <List rows={3}>
              <ListItem>
                <Common.Par bold={true} spacing={0.03}>
                  increased exposure
                </Common.Par>
              </ListItem>
              <ListItem>
                joint ventures
              </ListItem>
              <ListItem>
                <Common.Par bold={true} spacing={0.03}>
                  benefits of scale
                </Common.Par>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Common.Par bold={true} spacing={0.03}>
              Our team of experts become your marketing department
            </Common.Par>
          </ListItem>
          <ListItem>
            You <Common.Par bold={true} spacing={0.03}>don’t pay</Common.Par> for the individual services. <Common.Par underscore={true} spacing={0.03}>We are <b>NOT</b> an agency.</Common.Par>
          </ListItem>
          <ListItem>
            You allocate a <Common.Par bold={true} spacing={0.03}>pre-agreed marketing budget</Common.Par> (> 10% of your current MRR, or no less than $250)
          </ListItem>
          <ListItem>
            <Common.Par>We set growth & revenue goals together and hit them!</Common.Par>
          </ListItem>
        </List>
      </Styled.HowWrapper>
    </Styled.HowBackgroundWrapper>
  )
}

export default How;