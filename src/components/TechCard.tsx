import { COLORS } from '@/constants';
import React from 'react';
import styled from 'styled-components';

function TechCard({ children }: any) {
  return (
    <Wrapper>{children}</Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${COLORS.purpleSecondary};
  min-width: 100px;
`;

export default TechCard;