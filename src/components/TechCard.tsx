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
  padding: 4px 22px;
  border-radius: 50px;
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  
  font-size: ${14 / 16}rem;
  @media (min-width: 768px) {
    font-size: ${18 / 16}rem;
  }
`;

const Text = styled.span`
  font-size: ${16 / 16}rem;
  font-family: 'firaCodeBold';
`;

export default TechCard;