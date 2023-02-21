import { COLORS } from '@/constants';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import MaxWidthWrapper from './MaxWidthWrapper';

function Projects() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Heading>Projects</Heading>
        <ProjectWrapper>
          <div>
            <h3>Something 1</h3>
            <p>Eiusmod exercitation proident laborum eiusmod.</p>
          </div>
          <StyledImage src="/img/category_page.png" alt="" width={1148} height={852} />
        </ProjectWrapper>
        <ProjectWrapper>
          <div>
            <h3>Something 1</h3>
            <p>Eiusmod exercitation proident laborum eiusmod.</p>
          </div>
          <StyledImage src="/img/category_page.png" alt="" width={1148} height={852} />
        </ProjectWrapper>
        <ProjectWrapper>
          <div>
            <h3>Something 1</h3>
            <p>Eiusmod exercitation proident laborum eiusmod.</p>
          </div>
          <StyledImage src="/img/category_page.png" alt="" width={1148} height={852} />
        </ProjectWrapper>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.offBlack};
  color: ${COLORS.white};
  margin-top: -84px;
  padding: 84px 0;

  ${MaxWidthWrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const Heading = styled.h2`
  font-size: ${32 / 16}rem;
  font-family: 'firaCodeBold';
`;

const ProjectWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

export default Projects;