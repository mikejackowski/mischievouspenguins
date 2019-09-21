import React from 'react';
import * as Styled from './timeline.styles';
import * as Common from '../common/styles';

import List from '../List/List.component';
import ListItem from '../List/ListItem/ListItem.component';
import { ReactComponent as Fill } from '../../assets/fill.svg';
import { ReactComponent as Contact } from '../../assets/contact.svg';
import { ReactComponent as FaceToFace } from '../../assets/f2f.svg';
import { ReactComponent as Accepted } from '../../assets/accepted.svg';
import { ReactComponent as Networking } from '../../assets/networking.svg';
import { ReactComponent as Profit } from '../../assets/profit.svg';
import { ReactComponent as Work } from '../../assets/work.svg';
// const Timeline = () => (
//   <Styled.TimelineWrapper>
//     <Common.Header>
//       timeline
//     </Common.Header>
//     <List>
//       <ListItem>
//         You fill in the application
//       </ListItem>
//       <ListItem>
//         We contact you <Common.Par bold={true} spacing={0.05}>within 7 working days</Common.Par> to arrange an interview
//       </ListItem>
//       <ListItem>
//         After the interview, we analyse whether we are <Common.Par bold={true} spacing={0.05}>a good fit for 7-14 working days</Common.Par>
//       </ListItem>
//       <ListItem>
//         You receive information whether you have been <Common.Par bold={true} spacing={0.05}>accepted to the programme</Common.Par>
//       </ListItem>
//       <ListItem>
//         We arrange a <Common.Par bold={true} spacing={0.05}>face-to-face strategy bootcamp with your team in your location</Common.Par>
//       </ListItem>
//       <ListItem>
//         We invite all the teams to <Common.Par bold={true} spacing={0.05}>a weekend retreat</Common.Par> to discuss the common goals, strategies, and mingle (we select an affordable location within 2-hour’s flight of all/most of the accelerator members – whenever possible).
//       </ListItem>
//       <ListItem>
//         We get to work!
//       </ListItem>
//     </List>
//   </Styled.TimelineWrapper>
// );

const Timeline = () => (
  <Styled.TimelineBackgroundWrapper>
    <Styled.TimelineWrapper>
      <Common.Header>
        timeline
      </Common.Header>
      <Styled.TimelineStepsWrapper>
        <Styled.TimeLineItem align={'left'}>
          <Styled.TimelineItemText>
            You fill in the application
          </Styled.TimelineItemText>
          <Styled.TimelineImgWrapper>
            <Fill/>
          </Styled.TimelineImgWrapper>
        </Styled.TimeLineItem>
        <Styled.TimeLineItem align={'right'}>
          <Styled.TimelineItemText>
            We contact you <Common.Par bold={true} spacing={0.05}>within 7 working days</Common.Par> to arrange an interview
          </Styled.TimelineItemText>
          <Styled.TimelineImgWrapper>
            <Contact/>
          </Styled.TimelineImgWrapper>
        </Styled.TimeLineItem>
        <Styled.TimeLineItem align={'left'}>
          <Styled.TimelineItemText>
            After the interview, we analyse whether we are <Common.Par bold={true} spacing={0.05}>a good fit for 7-14 working days</Common.Par>
          </Styled.TimelineItemText>
          <Styled.TimelineImgWrapper>
            <Work/>
          </Styled.TimelineImgWrapper>
        </Styled.TimeLineItem>
        <Styled.TimeLineItem align={'right'}>
          <Styled.TimelineItemText>
            You receive information whether you have been <Common.Par bold={true} spacing={0.05}>accepted to the programme</Common.Par>
          </Styled.TimelineItemText>
          <Styled.TimelineImgWrapper>
            <Accepted/>
          </Styled.TimelineImgWrapper>
        </Styled.TimeLineItem>
        <Styled.TimeLineItem align={'left'}>
          <Styled.TimelineItemText>
            We arrange a <Common.Par bold={true} spacing={0.05}>face-to-face strategy bootcamp with your team in your location</Common.Par>
          </Styled.TimelineItemText>
          <Styled.TimelineImgWrapper>
            <FaceToFace/>
          </Styled.TimelineImgWrapper>
        </Styled.TimeLineItem>
        <Styled.TimeLineItem align={'right'}>
          <Styled.TimelineItemText>
          We invite all the teams to <Common.Par bold={true} spacing={0.05}>a weekend retreat</Common.Par> to discuss the common goals, strategies, and mingle (we select an affordable location within 2-hour’s flight of all/most of the accelerator members – whenever possible).
          </Styled.TimelineItemText>
          <Styled.TimelineImgWrapper>
            <Networking/>
          </Styled.TimelineImgWrapper>
        </Styled.TimeLineItem>
        <Styled.TimeLineItem align={'left'}>
          <Styled.TimelineItemText>
            We get to work!
          </Styled.TimelineItemText>
          <Styled.TimelineImgWrapper>
            <Profit/>
          </Styled.TimelineImgWrapper>
        </Styled.TimeLineItem>
      </Styled.TimelineStepsWrapper>
    </Styled.TimelineWrapper>
  </Styled.TimelineBackgroundWrapper>
)

export default Timeline;
