import { COLORS } from '@/constants';
import React from 'react';
import styled from 'styled-components';

function TechCard({ children }: any) {
  return (
    <Wrapper>{children}</Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 1.6em;
  border-radius: 1rem;
  background-color: ${COLORS.secondary};
  min-width: 200px;
`;

export default TechCard;