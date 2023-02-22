import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Project } from './Projects';
import { COLORS } from '@/constants';
import Link from 'next/link';
import { ArrowUpRight } from 'react-feather';
import Button from './Button';
import GradientBorder from './GradientBorder';

function ProjectCard({ name, description, link, image }: Project) {
  return (
    <Wrapper>
      <Info>
        <Name>{name}</Name>
        <Desc>{description}</Desc>
        {link && (
          <StyledLink href={link}>
            <Button as="span">Visit<ArrowUpRight /></Button>
          </StyledLink>
        )}
      </Info>
      <GradientBorder gradient={COLORS.primaryGradient} radius={12} size={12}>
        {image && (<StyledImage src={image?.url} alt={image?.alt} width={image?.width} height={image?.height} />)}
      </GradientBorder>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Name = styled.h3`
  font-size: ${20 / 16}rem;
`;
const Desc = styled.p``;

const StyledLink = styled(Link)`
  display: flex;

  ${Button} {
    display: flex;
    gap: 8px;
    padding-right: 22px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;

  @media (min-width: 1200px) {
    max-width: 800px;
    min-width: 800px;
  }
`;

export default ProjectCard;