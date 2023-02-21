import { COLORS } from '@/constants';
import React from 'react';
import styled from 'styled-components';

function TechCard({ children }: any) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 1.6em;
  border-radius: 12px;
  background-color: ${COLORS.secondary};
  min-width: 200px;
`;

const Text = styled.span`
  font-size: ${16 / 16}rem;
  font-family: 'firaCodeBold';
`;

export default TechCard;