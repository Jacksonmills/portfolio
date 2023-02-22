import styled from 'styled-components';
import Link from 'next/link';
import { Clipboard, GitHub, Linkedin } from 'react-feather';
import { COLORS } from '@/constants';
import ContactLinks from './ContactLinks';
import ContactLink from './ContactLink';
import { ToastContainer } from 'react-toastify';
import PrimaryButton from './PrimaryButton';
import CopyToClipboardButton, { handleCopyToClipboard } from './CopyToClipboardButton';
import UnstyledButton from './UnstyledButton';

const Footer = () => {
  return (
    <Wrapper>
      <TextInfo>
        <Name>Jackson Mills</Name>
        <Email onClick={() => handleCopyToClipboard('jacksonemills@gmail.com', '📝 Email copied to clipboard, looking forward to hearing from you!')}>jacksonemills@gmail.com</Email>
      </TextInfo>
      <ContactLinks>
        <ContactLink href='https://github.com/Jacksonmills/portfolio'>
          <GitHub />
        </ContactLink>
        <ContactLink href='https://www.linkedin.com/in/jackson-mills-76776a4b/'>
          <Linkedin />
        </ContactLink>
        <CopyToClipboardButton content={`jacksonemills@gmail.com`} successMessage={`📝 Email copied to clipboard, looking forward to hearing from you!`}><Clipboard /></CopyToClipboardButton>
      </ContactLinks>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  background-color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 24px;
  z-index: 99;
`;

const TextInfo = styled.div`
  color: ${COLORS.gray[500]};
  margin-right: auto;
`;
const Name = styled.div``;
const Email = styled(UnstyledButton)`
  cursor: pointer;
  color: currentColor;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
