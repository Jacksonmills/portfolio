import styled from 'styled-components';
import Link from 'next/link';

import { COLORS } from '@/constants';

import { GitHub, Linkedin } from 'react-feather';
import Logo from './Logo';
import PrimaryButton from './PrimaryButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const handleCopyEmailToClipboard = () => {
    navigator.clipboard.writeText('jacksonemills@gmail.com');
    toast('📝 Email copied to clipboard, looking forward to hearing from you!');
  };

  return (
    <Wrapper>
      <Logo>JEM</Logo>
      <NavControls>
        <NavLink href='https://github.com/Jacksonmills/portfolio'>
          <GitHub />
        </NavLink>
        <NavLink href='https://www.linkedin.com/in/jackson-mills-76776a4b/'>
          <Linkedin />
        </NavLink>
        <PrimaryButton onClick={handleCopyEmailToClipboard}>Contact</PrimaryButton>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
      </NavControls>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  background: ${COLORS.black};
  color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  z-index: 99;
`;

const NavControls = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  font-size: ${20 / 16}rem;
  color: ${COLORS.white};
  padding: 12px;
  background-color: transparent;
  border-radius: 4px;
  transition: background-color 100ms ease;

  &:hover {
    background-color: ${COLORS.offBlack};
  }
`;

export default Header;
