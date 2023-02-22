import { COLORS } from '@/constants';
import React from 'react';
import styled from 'styled-components';
import TechCard from './TechCard';
import ScrollSnap from './ScrollSnap';

function TechList({ tech }: { tech: string[]; }) {
  return (
    <Wrapper>
      <ScrollSnap>
        {tech.map((tech, index) => (<TechCard key={index}>{tech}</TechCard>))}
      </ScrollSnap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${COLORS.primaryGradient};
  color: ${COLORS.black};
  padding: 20px 0;
`;

export default TechList;