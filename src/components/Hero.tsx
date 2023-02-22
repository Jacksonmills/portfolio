import { COLORS } from '@/constants';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import GradientBorder from './GradientBorder';

function Hero() {
  return (
    <Wrapper>
      <Blurb>{`Hey, I'm Jackson Eroe Mills (`}<FancyText as="span">JEM</FancyText>{`), a Frontend Engineer from Chicago, IL`}</Blurb>
      <ImageWrapper>
        <GradientBorder gradient={COLORS.primaryGradient} radius={999} size={12}>
          <Image width={400} height={400} src="/img/avatar.png" alt="" />
        </GradientBorder>
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  max-width: 400px;
`;

const Blurb = styled.p`
  font-size: ${22 / 16}rem;
  
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FancyText = styled(Logo)`
  font-size: ${48 / 16}rem;
`;

export default Hero;