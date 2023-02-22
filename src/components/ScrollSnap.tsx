import styled from "styled-components";

export default styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 12px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  > * {
    scroll-snap-align: start;

    &:first-child {
      scroll-snap-align: center;
    }
  }
`;