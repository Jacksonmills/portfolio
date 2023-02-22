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
        <Address>Chicago, IL 60618</Address>
        <Email onClick={() => handleCopyToClipboard('jacksonemills@gmail.com', '📝 Email copied to clipboard, looking forward to hearing from you!')}>jacksonemills@gmail.com <Clipboard /></Email>
      </TextInfo>
      <ContactLinks>
        <ContactLink href='https://github.com/Jacksonmills/'>
          <GitHub />
        </ContactLink>
        <ContactLink href='https://www.linkedin.com/in/jackson-mills-76776a4b/'>
          <Linkedin />
        </ContactLink>
        <HideOnMobile>
          <CopyToClipboardButton content={`jacksonemills@gmail.com`} successMessage={`📝 Email copied to clipboard, looking forward to hearing from you!`}>Email me</CopyToClipboardButton>
        </HideOnMobile>
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
const Address = styled.div``;
const Email = styled(UnstyledButton)`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: currentColor;
  padding: 2px 4px;
  margin: 0 -4px;
  border-radius: 4px;

  &:hover {
    background-color: ${COLORS.gray[900]};
  }

  svg {
    --size: 1.25em;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
    position: relative;
    top: -1px;
  }
`;

const HideOnMobile = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Footer;
