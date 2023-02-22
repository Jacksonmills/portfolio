import { COLORS } from '@/constants';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

function Hero() {
  return (
    <Wrapper>
      <Blurb>{`Hey, I'm Jackson Eroe Mills (`}<FancyText>JEM</FancyText>{`), a Frontend Engineer from Chicago, IL`}</Blurb>
      <HeroImageWrapper>
        <Image width={400} height={400} src="/img/avatar.png" alt="" />
      </HeroImageWrapper>
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

const HeroImageWrapper = styled.div`
  --size: 12px;

  position: relative;
  border-radius: 50%;
  width: 100%;
  height: auto;
  max-width: 360px;
  background-clip: padding-box;
  border: solid var(--size) transparent;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 8px;
    left: 0;
    z-index: 0;
    margin: calc(var(--size) * -1);
    border-radius: inherit;
    background: ${COLORS.primaryGradient};
  }

  img {
    position: relative;
    z-index: 1;
    border-radius: 50%;
    width: 100%;
    height: auto;
    max-width: 360px;
  }
`;

export default Hero;