import { COLORS } from '@/constants';
import styled from 'styled-components';

export default styled.button`
  --primary-color: ${COLORS.gray[100]};
  --secondary-color: ${COLORS.black};

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  padding: 1em 2em;
  font-size: ${14 / 16}rem;
  font-weight: bold;
  font-family: 'firaCodeRegular';
  color: var(--secondary-color);
  background-color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;
  transition: filter 100ms ease;
  text-decoration: none;

  &:hover {
    filter: brightness(110%);
  }

  @media (min-width: 768px) {
    font-size: ${18 / 16}rem;
  }
`;