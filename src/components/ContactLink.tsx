import { COLORS } from "@/constants";
import Link from "next/link";
import styled from "styled-components";

export default styled(Link)`
  display: inline-flex;
  color: ${COLORS.white};
  background-color: transparent;
  border-radius: 4px;
  transition: background-color 100ms ease;
  
  &:hover {
    background-color: ${COLORS.offBlack};
  }
  
  padding: 6px;
  font-size: ${20 / 16}rem;
  @media (min-width: 768px) {
    padding: 12px;
    font-size: ${32 / 16}rem;
  }

  svg {
    width: 1em;
    height: 1em;
  }
`;