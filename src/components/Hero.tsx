import { COLORS } from '@/constants';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

function Hero() {
  return (
    <Wrapper>
      <Blurb>{`Hey, I'm Jackson Eroe Mills (`}<FancyText>JEM</FancyText>{`), a Frontend Engineer from Chicago, IL`}</Blurb>
      <HeroImage width={400} height={400} src="/img/avatar.png" alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Blurb = styled.p`
  font-size: ${22 / 16}rem;
`;

const FancyText = styled.span`
  font-size: ${48 / 16}rem;
  color: transparent;
  font-family: 'thunder';
  background-image: ${COLORS.primaryGradient};
  background-clip: text;
  white-space: nowrap;
  position: relative;
  top: 1px;
`;

const HeroImage = styled(Image)`
  border-radius: 50%;
  width: 100%;
  height: auto;
  max-width: 360px;
`;

export default Hero;