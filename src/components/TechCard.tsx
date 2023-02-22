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
  border-radius: 50px;
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  
  padding: 4px 22px;
  @media (min-width: 768px) {
    padding: 22px 48px;
  }
`;

const Text = styled.span`
  font-family: 'firaCodeBold';

  font-size: ${14 / 16}rem;
  @media (min-width: 768px) {
    font-size: ${22 / 16}rem;
  }
`;

export default TechCard;