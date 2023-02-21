import styled from 'styled-components';
import SiteLayoutWrapper from '@/components/SiteLayoutWrapper';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import VisuallyHidden from '@/components/VisuallyHidden';
import TechList from '@/components/TechList';
import Image from 'next/image';
import { COLORS } from '@/constants';
import PrimaryButton from '@/components/PrimaryButton';
import Projects from '@/components/Projects';
import Hero from '@/components/Hero';


const tech = ['JavaScript', 'TypeScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB'];

export default function Home() {
  return (
    <SiteLayoutWrapper>
      <VisuallyHidden as="h1">Jackson Mills Portfolio</VisuallyHidden>
      <Wrapper>
        <MaxWidthWrapper>
          <Hero />
        </MaxWidthWrapper>
        <TechList tech={tech} />
        <Projects />
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
