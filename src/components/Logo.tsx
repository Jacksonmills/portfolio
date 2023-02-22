import { COLORS } from "@/constants";
import styled from "styled-components";

export default styled.div`
  font-size: ${64 / 16}rem;
  font-family: 'thunder';
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: auto;
  pointer-events: none;
  user-select: none;
  background-image: ${COLORS.primaryGradient};
  background-clip: text;
  display: inline-flex;
  position: relative;
  top: 4px;
  letter-spacing: 0.5px;
`;