import React from 'react';
import * as Styled from './hero.styles';
import * as StyledCommon from '../common/styles';
import { ReactComponent as FeatureImg} from '../common/stolensvg.svg';
import { colors } from '../common/variables';

type OwnProps = {
  handleSubmit: () => void;
};

const Hero = (props: OwnProps) => {
  return (
    <Styled.HeroWrapper>
      <StyledCommon.DesktopWrapper>
          <FeatureImg fill={colors.theme}/>
      </StyledCommon.DesktopWrapper>
      <Styled.HeroContentWrapper>
        <div>
          <Styled.HeroHeader>
            Skyrocket your startup growth!
          </Styled.HeroHeader>
          <Styled.HeroSubheader>
            <p>Startup Marketing Acceleration Programme</p>
            <p>Applications now open!</p>
          </Styled.HeroSubheader>
        </div>
        <Styled.InputWrapper>
          <Styled.ActionButton
            onClick={props.handleSubmit}>
            apply
          </Styled.ActionButton>
        </Styled.InputWrapper>
      </Styled.HeroContentWrapper>
    </Styled.HeroWrapper>
  )
}

export default Hero;