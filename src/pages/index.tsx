import styled from 'styled-components';
import SiteLayoutWrapper from '@/components/SiteLayoutWrapper';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import VisuallyHidden from '@/components/VisuallyHidden';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Home() {
  const code = `
    const thing = 'test'
    console.log(thing)
  `;
  return (
    <SiteLayoutWrapper>
      <MaxWidthWrapper>
        <VisuallyHidden as="h1">Jackson Mills Portfolio</VisuallyHidden>
        <Wrapper>
          <Code language="javascript">
            {code}
          </Code>
          <Blurb>A Front End Web Engineer with over 8 years of experience in the industry. Jackson is a passionate learner and loves working with an Agile workflow. He is skilled in TypeScript, SCSS, React, Next.js, and Python, and leverages his expertise to build beautiful, high-quality web experiences.</Blurb>
        </Wrapper>
      </MaxWidthWrapper>
    </SiteLayoutWrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`;

const Code = styled(SyntaxHighlighter)`
  border-radius: 0.5rem;
`;

const Blurb = styled.p`
  font-size: ${22 / 16}rem;
`;
