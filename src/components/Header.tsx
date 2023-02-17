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
        <NavLink href='/'>
          Home
        </NavLink>
        <NavLink href='/about'>
          About
        </NavLink>
        <NavLink href='/projects'>
          Projects
        </NavLink>
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
  --primary-color: ${COLORS.purpleSecondary};
  --secondary-color: ${COLORS.offblack};
`;

const NavControls = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const NavLink = styled(Link)`
  font-size: ${20 / 16}rem;
  color: ${COLORS.white};
`;

export default Header;
