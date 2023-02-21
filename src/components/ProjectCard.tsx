import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Project } from './Projects';

function ProjectCard({ name, description, image }: Project) {
  return (
    <Wrapper>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      {image && (<StyledImage src={image?.url} alt={image?.alt} width={image?.width} height={image?.height} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 12px;

  @media (min-width: 1200px) {
    max-width: 800px;
    min-width: 800px;
  }
`;

export default ProjectCard;