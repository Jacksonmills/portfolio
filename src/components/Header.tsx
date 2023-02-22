import styled from 'styled-components';
import { COLORS } from '@/constants';
import { GitHub, Linkedin } from 'react-feather';
import Logo from './Logo';
import ContactLinks from './ContactLinks';
import ContactLink from './ContactLink';
import CopyToClipboardButton from './CopyToClipboardButton';

const Header = () => {
  return (
    <Wrapper>
      <Logo>JEM</Logo>
      <ContactLinks>
        <ContactLink href='https://github.com/Jacksonmills/portfolio'>
          <GitHub />
        </ContactLink>
        <ContactLink href='https://www.linkedin.com/in/jackson-mills-76776a4b/'>
          <Linkedin />
        </ContactLink>
        <CopyToClipboardButton content={`jacksonemills@gmail.com`} successMessage={`📝 Email copied to clipboard, looking forward to hearing from you!`}>Contact me</CopyToClipboardButton>
      </ContactLinks>
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
  gap: 12px;
  padding: 8px 24px;
  z-index: 99;
`;

export default Header;
