import styled from 'styled-components';
import SiteLayoutWrapper from '@/components/SiteLayoutWrapper';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import VisuallyHidden from '@/components/VisuallyHidden';
import TechList from '@/components/TechList';


const tech = ['JavaScript', 'TypeScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB'];

export default function Home() {
  return (
    <SiteLayoutWrapper>
      <VisuallyHidden as="h1">Jackson Mills Portfolio</VisuallyHidden>
      <Wrapper>
        <MaxWidthWrapper>
          <Blurb>A Front End Web Engineer with over 8 years of experience in the industry. Jackson is a passionate learner and loves working with an Agile workflow. He is skilled in TypeScript, SCSS, React, Next.js, and Python, and leverages his expertise to build beautiful, high-quality web experiences.</Blurb>
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

const Blurb = styled.p`
  font-size: ${22 / 16}rem;
`;
