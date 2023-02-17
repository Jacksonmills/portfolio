import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { COLORS } from '@/constants';

import Button from '@/components/Button';
import { PlusCircle } from 'react-feather';
import Logo from './Logo';

const Header = () => {
  const isDev = process.env.NODE_ENV !== 'production';

  return (
    <Wrapper>
      <Logo>Jackson Mills</Logo>
      <NavControls>
        <Link href='/'>
          <PrimaryButton>Home</PrimaryButton>
        </Link>
        <Link href='/about'>
          <PrimaryButton>About</PrimaryButton>
        </Link>
        <Link href='/projects'>
          <PrimaryButton>Projects</PrimaryButton>
        </Link>
        <Link href='/contact'>
          <PrimaryButton>Contact</PrimaryButton>
        </Link>
      </NavControls>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  background: ${COLORS.purpleBackgroundDark};
  color: ${COLORS.white};
  display: flex;
  align-items: center;
  padding: 6px 24px;
  z-index: 99;
`;

const PrimaryButton = styled(Button)`
  --primary-color: ${COLORS.primary};
  --secondary-color: ${COLORS.offblack};
`;

const DropDown = styled.div`
  --background-color: ${COLORS.black};
  --color: ${COLORS.white};

  position: absolute;
  top: 100%;
  right: 8px;
  display: block;
  min-width: 300px;
  padding: 1em;
  color: var(--color);
  background-color: var(--background-color);
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(-12px);
  transition: transform 200ms ease, opacity 200ms ease;

  &:focus-within {
    pointer-events: initial;
    opacity: 1;
    transform: translateY(0px);
  }

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    right: 8px;
    width: 10px;
    height: 10px;
    background-color: var(--background-color);
    border-radius: 2px;
    transform: rotate(45deg);
  }

  button {
    width: 100%;
  }
`;

const NavControls = styled.nav`
  display: flex;
  gap: 10px;
`;

export default Header;
