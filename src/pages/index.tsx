import styled from 'styled-components';
import SiteLayoutWrapper from '@/components/SiteLayoutWrapper';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import VisuallyHidden from '@/components/VisuallyHidden';
import TechList from '@/components/TechList';
import Image from 'next/image';
import { COLORS } from '@/constants';


const tech = ['JavaScript', 'TypeScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB'];

export default function Home() {
  return (
    <SiteLayoutWrapper>
      <VisuallyHidden as="h1">Jackson Mills Portfolio</VisuallyHidden>
      <Wrapper>
        <MaxWidthWrapper>
          <Hero>
            <Blurb>{`Hello, I'm`} <FancyText>JACKSON MILLS</FancyText>{`, a front-end engineer from Chicago.`}</Blurb>
            <HeroImage width={400} height={400} src="/img/avatar.png" alt="" />
          </Hero>
        </MaxWidthWrapper>
        <TechList tech={tech} />
      </Wrapper>
    </SiteLayoutWrapper>
  );
}

const Wrapper = styled.div`
  --spacing: 84px;
  
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding-top: var(--spacing);
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Blurb = styled.p`
  font-size: ${32 / 16}rem;
`;

const FancyText = styled.span`
  font-size: ${56 / 16}rem;
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
`;
