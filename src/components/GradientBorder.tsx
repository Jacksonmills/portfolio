import React from 'react';
import styled from 'styled-components';

function GradientBorder({
  gradient = 'transparent',
  radius = 0,
  size = 1,
  children
}: {
  gradient?: string,
  radius?: number,
  size?: number,
  children: React.ReactNode;
}) {
  return (
    <Wrapper gradientColor={gradient} borderRadius={radius} borderSize={size}>{children}</Wrapper>
  );
}

const Wrapper = styled.div<{
  gradientColor: string;
  borderRadius: number;
  borderSize: number;
}>`
  --border-size: ${props => props.borderSize}px;
  --border-radius: ${props => props.borderRadius}px;

  position: relative;
  border-radius: var(--border-radius);
  width: 100%;
  height: auto;
  background-clip: padding-box;
  border: solid var(--border-size) transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 8px;
    left: 0;
    z-index: 0;
    margin: calc(var(--border-size) * -1);
    border-radius: inherit;
    background: ${props => props.gradientColor};
  }

  > * {
    position: relative;
    z-index: 1;
    border-radius: calc(var(--border-radius) / 2);
    width: 100%;
    height: auto;
  }
`;

export default GradientBorder;