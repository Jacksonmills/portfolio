import { COLORS } from '@/constants';
import React from 'react';
import styled from 'styled-components';
import TechCard from './TechCard';
import ScrollSnap from './ScrollSnap';

function TechList({ tech }: { tech: string[]; }) {
  return (
    <Wrapper>
      <StyledScrollSnap>
        {tech.map((tech, index) => (<TechCard key={index}>{tech}</TechCard>))}
      </StyledScrollSnap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${COLORS.primaryGradient};
  color: ${COLORS.black};
  padding: 20px 0;
`;

const StyledScrollSnap = styled(ScrollSnap)`
  @media (min-width: 768px) {
    overflow-x: visible;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export default TechList;