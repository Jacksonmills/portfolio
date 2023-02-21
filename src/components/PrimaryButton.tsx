import { COLORS } from "@/constants";
import styled from "styled-components";
import Button from "./Button";

export default styled(Button)`
  --primary-color: ${COLORS.secondary};
  --secondary-color: ${COLORS.black};
  background-image: ${COLORS.primaryGradient};
`;